const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
const Moralis = require("moralis-v1/node");

const serverUrl = "https://rwpdr3cnr2wi.usemoralis.com:2053/server";
const appId = "5PgCvhiSu5gtqOK8UCn6ZrkFifeOiLqhUsNz1rJE";
const masterKey = "BO4pXYrH7IUkF3LYofTI9bpywqd0GNDvFUZyJDiq";

async function createMetadataJson(tokenId) {
	let metadata = {
		name: `Minh Dang Token ${tokenId}`,
		description: "NFT",
		image: `https://gateway.moralisipfs.com/ipfs/QmSQ2hPzEULdYiKA2NyuZP3YVVuontLpaCQp7EwbL8BQpD/${tokenId}.png`,
		attributes: [],
	};
	fs.writeFileSync(
		path.resolve(`src/build/json/${tokenId}.json`),
		JSON.stringify(metadata)
	);
	await Moralis.start({ serverUrl, appId, masterKey });
	const zipFile = fs.readFileSync(
		path.resolve(`src/build/json/${tokenId}.json`),
		"base64"
	);
	const file = new Moralis.File("minh-dang-token-" + tokenId, {
		base64: zipFile,
	});

	await file.saveIPFS({ useMasterKey: true });

	console.log(file.ipfs(), file.hash());
	return file.hash();
}

module.exports = {
	createMetadataJson,
};
