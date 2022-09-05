const moment = require("moment-timezone");
const cronJob = require("cron").CronJob;
const { handleAuctionClose, handleAuctionOpen } = require("./auction");

main = async function () {
	const hour = moment().tz("Asia/Ho_Chi_Minh").hour();
	const minute = moment().tz("Asia/Ho_Chi_Minh").minutes();
	if (hour >= 9 && hour <= 24 && minute == 5) {
		await handleAuctionOpen();
	} else if (hour >= 9 && hour <= 24 && minute == 40) {
		await handleAuctionClose();
	}
};

var job = new cronJob(
	"0 * * * * *",
	async function () {
		await main().catch((err) => {
			console.log(err);
		});
	},
	null,
	true,
	"Asia/Ho_Chi_Minh"
);

function startJob() {
	console.log("Job run");
	job.start();
}

module.exports = {
	startJob,
};
