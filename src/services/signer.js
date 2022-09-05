const { ethers } = require("ethers");
const { privateKey, rpcUrl } = require("../configs/admin");
const getSigner = () => {
	const provider = getProvider();
	const signer = new ethers.Wallet(privateKey, provider);
	return signer;
};

const getProvider = () => {
	const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
	return provider;
};

module.exports = {
	getSigner,
	getProvider,
};
