const nftAddress = "0x21bcf22790B6d66C2d1a23cd08a522418315Ce3e";
const nftAbi = [
	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "delegator",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "fromDelegate",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "toDelegate",
				type: "address",
			},
		],
		name: "DelegateChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "delegate",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "previousBalance",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "newBalance",
				type: "uint256",
			},
		],
		name: "DelegateVotesChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [],
		name: "DOMAIN_SEPARATOR",
		outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "approvals",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "baseExtension",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "burn",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
		name: "delegate",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "delegatee", type: "address" },
			{ internalType: "uint256", name: "nonce", type: "uint256" },
			{ internalType: "uint256", name: "expiry", type: "uint256" },
			{ internalType: "uint8", name: "v", type: "uint8" },
			{ internalType: "bytes32", name: "r", type: "bytes32" },
			{ internalType: "bytes32", name: "s", type: "bytes32" },
		],
		name: "delegateBySig",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "delegates",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
		name: "getPastTotalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "account", type: "address" },
			{ internalType: "uint256", name: "blockNumber", type: "uint256" },
		],
		name: "getPastVotes",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "getVotes",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "maxSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "mintValidTarget",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "nftIsBurned",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "nonces",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "_target", type: "address" },
			{ internalType: "bool", name: "_permission", type: "bool" },
		],
		name: "setApproval",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "string", name: "baseExtension_", type: "string" },
		],
		name: "setBaseExtension",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
			{ internalType: "string", name: "_tokenUri", type: "string" },
		],
		name: "setTokenUri",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "_target", type: "address" },
			{ internalType: "bool", name: "_permission", type: "bool" },
		],
		name: "setValidTarget",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
		name: "tokenByIndex",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "uint256", name: "index", type: "uint256" },
		],
		name: "tokenOfOwnerByIndex",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "validTargets",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
];

// const nftAddress = "0x0B786e4b37dA7F57763f70282AAf5bF91dFE0b57";
// const nftAbi = [
// 	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "owner",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "approved",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "uint256",
// 				name: "tokenId",
// 				type: "uint256",
// 			},
// 		],
// 		name: "Approval",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "owner",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "operator",
// 				type: "address",
// 			},
// 			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
// 		],
// 		name: "ApprovalForAll",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "delegator",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "fromDelegate",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "toDelegate",
// 				type: "address",
// 			},
// 		],
// 		name: "DelegateChanged",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "delegate",
// 				type: "address",
// 			},
// 			{
// 				indexed: false,
// 				internalType: "uint256",
// 				name: "previousBalance",
// 				type: "uint256",
// 			},
// 			{
// 				indexed: false,
// 				internalType: "uint256",
// 				name: "newBalance",
// 				type: "uint256",
// 			},
// 		],
// 		name: "DelegateVotesChanged",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "previousOwner",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "newOwner",
// 				type: "address",
// 			},
// 		],
// 		name: "OwnershipTransferred",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: "address", name: "from", type: "address" },
// 			{ indexed: true, internalType: "address", name: "to", type: "address" },
// 			{
// 				indexed: true,
// 				internalType: "uint256",
// 				name: "tokenId",
// 				type: "uint256",
// 			},
// 		],
// 		name: "Transfer",
// 		type: "event",
// 	},
// 	{
// 		inputs: [],
// 		name: "DOMAIN_SEPARATOR",
// 		outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "", type: "address" }],
// 		name: "approvals",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 		],
// 		name: "approve",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "owner", type: "address" }],
// 		name: "balanceOf",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "baseExtension",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
// 		name: "burn",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
// 		name: "delegate",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "delegatee", type: "address" },
// 			{ internalType: "uint256", name: "nonce", type: "uint256" },
// 			{ internalType: "uint256", name: "expiry", type: "uint256" },
// 			{ internalType: "uint8", name: "v", type: "uint8" },
// 			{ internalType: "bytes32", name: "r", type: "bytes32" },
// 			{ internalType: "bytes32", name: "s", type: "bytes32" },
// 		],
// 		name: "delegateBySig",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "account", type: "address" }],
// 		name: "delegates",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
// 		name: "getApproved",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
// 		name: "getPastTotalSupply",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "account", type: "address" },
// 			{ internalType: "uint256", name: "blockNumber", type: "uint256" },
// 		],
// 		name: "getPastVotes",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "account", type: "address" }],
// 		name: "getVotes",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "owner", type: "address" },
// 			{ internalType: "address", name: "operator", type: "address" },
// 		],
// 		name: "isApprovedForAll",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "maxSupply",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "mintValidTarget",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "name",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		name: "nftIsBurned",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "owner", type: "address" }],
// 		name: "nonces",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "owner",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
// 		name: "ownerOf",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "renounceOwnership",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "from", type: "address" },
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 		],
// 		name: "safeTransferFrom",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "from", type: "address" },
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 			{ internalType: "bytes", name: "data", type: "bytes" },
// 		],
// 		name: "safeTransferFrom",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "_target", type: "address" },
// 			{ internalType: "bool", name: "_permission", type: "bool" },
// 		],
// 		name: "setApproval",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "operator", type: "address" },
// 			{ internalType: "bool", name: "approved", type: "bool" },
// 		],
// 		name: "setApprovalForAll",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "string", name: "baseExtension_", type: "string" },
// 		],
// 		name: "setBaseExtension",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "uint256", name: "_tokenId", type: "uint256" },
// 			{ internalType: "string", name: "_tokenUri", type: "string" },
// 		],
// 		name: "setTokenUri",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "_target", type: "address" },
// 			{ internalType: "bool", name: "_permission", type: "bool" },
// 		],
// 		name: "setValidTarget",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
// 		name: "supportsInterface",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "symbol",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
// 		name: "tokenByIndex",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "owner", type: "address" },
// 			{ internalType: "uint256", name: "index", type: "uint256" },
// 		],
// 		name: "tokenOfOwnerByIndex",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
// 		name: "tokenURI",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "totalSupply",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "from", type: "address" },
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 		],
// 		name: "transferFrom",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
// 		name: "transferOwnership",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "", type: "address" }],
// 		name: "validTargets",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// ];

module.exports = {
	nftAddress,
	nftAbi,
};