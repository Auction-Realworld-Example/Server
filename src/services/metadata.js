const Moralis = require("moralis-v1/node");
const fs = require("fs");
const path = require("path");
const serverUrl = "https://6tvbhrzdxrsk.usemoralis.com:2053/server";
const appId = "aMquS2ZhKgLMozf0XsT0MtXyItt7NdqY6gtLh52o";
const masterKey = "GAnYBAdARgaGv8LX2rjaSQedLHDNSJvUELPBVnuH";

async function createMetadataJson(nftId) {
	console.log(nftId);
	let metadata = {
		name: `Multi Deactive Token ${nftId}`,
		description: `A powerful NFT from Multi Deactive`,
		image: `https://gateway.moralisipfs.com/ipfs/QmS6NrwVrTuuLrDdnE3d9pEBTz4JWoBW4Vzf6DdKyCJHGD/${nftId}.png`,
		attributes: [],
	};
	fs.writeFileSync(
		path.resolve(`src/build/json/${nftId}.json`),
		JSON.stringify(metadata)
	);
	const zipFile = fs.readFileSync(
		path.resolve(`src/build/json/${nftId}.json`),
		"base64"
	);
	await Moralis.start({
		serverUrl,
		appId,
		masterKey,
	});
	const file = new Moralis.File("Multi-Deactive" + nftId + ".json", {
		base64: zipFile,
	});
	await file.saveIPFS({ useMasterKey: true });
	console.log(file.hash());
	return `ipfs://${file.hash()}`;
}

main = async () => {
	await createMetadataJson(1);
};

module.exports = { main, createMetadataJson };
