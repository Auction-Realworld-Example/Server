const { createMetadataJson } = require("./services/metadata");
const { ethers } = require("ethers");
const { getSigner, getProvider } = require("./services/signer");
const { auctionAddress, auctionAbi } = require("./configs/auction");
const { nftAddress, nftAbi } = require("./configs/nft");

async function runTest() {
	const signer = await getSigner();
	const hash = await createMetadataJson(7);
	const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);
	const tx = await nftContract.setTokenUri(7, `ipfs://${hash}`);
	console.log(tx);
	await tx.wait().then((res) => {
		return;
	});
}

(async () => {
	await runTest();
})();
