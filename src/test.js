const { createMetadataJson } = require("./services/metadata");
const { ethers } = require("ethers");
const { getSigner, getProvider } = require("./services/signer");
const { auctionAddress, auctionAbi } = require("./configs/auction");
const { nftAddress, nftAbi } = require("./configs/nft");
const { handlAuctionClose } = require("./services/cron");

async function doTrigger() {
	await handlAuctionClose();
	// try {
	// 	let maxFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
	// 	let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
	// 	try {
	// 		const { data } = await axios({
	// 			method: "get",
	// 			url: isProd
	// 				? "https://gasstation-mainnet.matic.network/v2"
	// 				: "https://gasstation-mumbai.matic.today/v2",
	// 		});
	// 		maxFeePerGas = ethers.utils.parseUnits(
	// 			Math.ceil(data.fast.maxFee) + "",
	// 			"gwei"
	// 		);
	// 		maxPriorityFeePerGas = ethers.utils.parseUnits(
	// 			Math.ceil(data.fast.maxPriorityFee) + "",
	// 			"gwei"
	// 		);
	// 	} catch {
	// 		// ignore
	// 	}
	// 	const signer = await getSigner();
	// 	const hash = await createMetadataJson(2);
	// 	const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);
	// 	const tx = await nftContract.setTokenUri(2, `ipfs://${hash}/`, {
	// 		maxFeePerGas,
	// 		maxPriorityFeePerGas,
	// 	});
	// 	console.log(tx);
	// 	console.log(maxFeePerGas, maxPriorityFeePerGas);
	// 	await tx.wait();
	// } catch (e) {
	// 	console.log("Loi");
	// 	console.log(e);
	// }
}

(async () => {
	await doTrigger();
})();
