const { ethers } = require("ethers");
const { auctionAddress, auctionAbi } = require("../configs/auction");
const { nftAddress, nftAbi } = require("../configs/nft");
const { createMetadataJson } = require("./metadata");
const { getSigner, getProvider } = require("./signer");
const Moralis = require("moralis-v1/node");
const serverUrl = "https://6tvbhrzdxrsk.usemoralis.com:2053/server";
const appId = "aMquS2ZhKgLMozf0XsT0MtXyItt7NdqY6gtLh52o";
const masterKey = "GAnYBAdARgaGv8LX2rjaSQedLHDNSJvUELPBVnuH";

const getHighestNftId = async (address, tableName) => {
	await Moralis.start({
		serverUrl,
		appId,
		masterKey,
	});
	const Object = Moralis.Object.extend(tableName);
	const query = new Moralis.Query(Object);
	return await query
		.descending("nftId")
		.equalTo("address", address.toLowerCase())
		.limit(1)
		.find();
};

const handleAuctionOpen = async () => {
	try {
		const signer = getSigner();
		const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);
		const totalSupply = await nftContract.totalSupply();
		let uri;
		if (parseInt(totalSupply) == 0) {
			const data = await getHighestNftId(
				"0x93d59257BB4D02D672CFfc4EA3f381C58137f533",
				"AuctionClosed"
			);
			uri = await createMetadataJson(parseInt(data[0].attributes.nftId) + 1);
		} else {
			const lastNft = await nftContract.tokenByIndex(parseInt(totalSupply) - 1);
			const newNft = parseInt(lastNft) + 1;
			console.log(newNft);
			uri = await createMetadataJson(newNft);
		}
		const auctionContract = new ethers.Contract(
			auctionAddress,
			auctionAbi,
			signer
		);
		const tx = await auctionContract.openAuction(uri);
		await tx.wait();
	} catch (err) {
		console.log(err);
	}
};

const handleAuctionClose = async () => {
	try {
		const signer = getSigner();
		const auctionContract = new ethers.Contract(
			auctionAddress,
			auctionAbi,
			signer
		);
		const tx = await auctionContract.closeAuction();
		await tx.wait();
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	handleAuctionClose,
	handleAuctionOpen,
	getHighestNftId,
};
