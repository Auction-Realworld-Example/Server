const { main: doMain } = require("./services/metadata");
const { handleAuctionOpen, getHighestNftId } = require("./services/auction");
main = async function () {
	await handleAuctionOpen();
	// const data = await getHighestNftId(
	// 	"0x93d59257BB4D02D672CFfc4EA3f381C58137f533",
	// 	"AuctionClosed"
	// );
	// console.log(data[0].attributes.nftId);
};

main();
