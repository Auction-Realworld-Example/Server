const moment = require("moment-timezone");
const cronJob = require("cron").CronJob;
const { ethers } = require("ethers");
const { getSigner } = require("./signer");
const { auctionAddress, auctionAbi } = require("../configs/auction");
const { nftAddress, nftAbi } = require("../configs/nft");
const { createMetadataJson } = require("./metadata");
handleAuctionOpen = async function () {
	/**
	 * Trong handle auction xu li:
	 * 1. open auction va lay ra index of token moi nhat
	 * 2. goi ham metadata de tao metadata cho token moi nhat
	 * 3. upload metadata len ipfs
	 * */
	try {
		const signer = await getSigner();
		const auctionContract = new ethers.Contract(
			auctionAddress,
			auctionAbi,
			signer
		);
		await auctionContract.openAuction();
		const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);
		let totalSupply = await nftContract.totalSupply();
		totalSupply = parseInt(totalSupply);
		if (totalSupply > 0) {
			const lastTokenId = parseInt(
				await nftContract.tokenByIndex(totalSupply - 1)
			); // Lay index moi nhat
			const hash = await createMetadataJson(lastTokenId);
			await nftContract.setTokenUri(lastTokenId, `ipfs://${hash}`);
		}
		console.log("Open auction");
	} catch (error) {
		console.log("Open auction error");
		console.log(error);
	}
};

handlAuctionClose = async function () {
	try {
		const signer = await getSigner();
		const auctionContract = new ethers.Contract(
			auctionAddress,
			auctionAbi,
			signer
		);
		await auctionContract.closeAuction();
		console.log("Close auction");
	} catch (err) {
		console.log("Close auction error");
		console.log(err);
	}
};

main = async function () {
	var hour = moment().tz("Asia/Ho_Chi_Minh").hour();

	var min = moment().tz("Asia/Ho_Chi_Minh").minutes();
	if (hour >= 9 && hour <= 24 && min == 5) {
		await handleAuctionOpen();
	}
	if (hour >= 9 && hour <= 24 && min == 40) {
		await handlAuctionClose();
	}
};

// main()
var job = new cronJob(
	"0 * * * * *",
	async function () {
		await main().catch((error) => {
			console.error(error);
			process.exit(1);
		});
	},
	null,
	true,
	"Asia/Ho_Chi_Minh"
);

function startJob() {
	console.log("Job already started");
	job.start();
}

module.exports = {
	startJob,
	handlAuctionClose,
	handleAuctionOpen,
};
