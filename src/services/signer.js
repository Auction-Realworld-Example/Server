const ethers = require("ethers");
const { rpcUrl, privateKey } = require("../configs/admin");

async function getSigner() {
	const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
	const signer = new ethers.Wallet(privateKey, provider);
	return signer;
}

function getProvider() {
	const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
	return provider;
}

module.exports = {
	getSigner,
	getProvider,
};
