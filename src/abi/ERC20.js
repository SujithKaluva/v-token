export const ERC20 = {
	"compiler": {
		"version": "0.8.22+commit.4fc1097e"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "allowance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "needed",
						"type": "uint256"
					}
				],
				"name": "ERC20InsufficientAllowance",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "needed",
						"type": "uint256"
					}
				],
				"name": "ERC20InsufficientBalance",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "approver",
						"type": "address"
					}
				],
				"name": "ERC20InvalidApprover",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					}
				],
				"name": "ERC20InvalidReceiver",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "ERC20InvalidSender",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					}
				],
				"name": "ERC20InvalidSpender",
				"type": "error"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "decimals",
				"outputs": [
					{
						"internalType": "uint8",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"errors": {
				"ERC20InsufficientAllowance(address,uint256,uint256)": [
					{
						"details": "Indicates a failure with the `spender`’s `allowance`. Used in transfers.",
						"params": {
							"allowance": "Amount of tokens a `spender` is allowed to operate with.",
							"needed": "Minimum amount required to perform a transfer.",
							"spender": "Address that may be allowed to operate on tokens without being their owner."
						}
					}
				],
				"ERC20InsufficientBalance(address,uint256,uint256)": [
					{
						"details": "Indicates an error related to the current `balance` of a `sender`. Used in transfers.",
						"params": {
							"balance": "Current balance for the interacting account.",
							"needed": "Minimum amount required to perform a transfer.",
							"sender": "Address whose tokens are being transferred."
						}
					}
				],
				"ERC20InvalidApprover(address)": [
					{
						"details": "Indicates a failure with the `approver` of a token to be approved. Used in approvals.",
						"params": {
							"approver": "Address initiating an approval operation."
						}
					}
				],
				"ERC20InvalidReceiver(address)": [
					{
						"details": "Indicates a failure with the token `receiver`. Used in transfers.",
						"params": {
							"receiver": "Address to which tokens are being transferred."
						}
					}
				],
				"ERC20InvalidSender(address)": [
					{
						"details": "Indicates a failure with the token `sender`. Used in transfers.",
						"params": {
							"sender": "Address whose tokens are being transferred."
						}
					}
				],
				"ERC20InvalidSpender(address)": [
					{
						"details": "Indicates a failure with the `spender` to be approved. Used in approvals.",
						"params": {
							"spender": "Address that may be allowed to operate on tokens without being their owner."
						}
					}
				]
			},
			"events": {
				"Approval(address,address,uint256)": {
					"details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
				},
				"Transfer(address,address,uint256)": {
					"details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
				}
			},
			"kind": "dev",
			"methods": {
				"allowance(address,address)": {
					"details": "See {IERC20-allowance}."
				},
				"approve(address,uint256)": {
					"details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
				},
				"balanceOf(address)": {
					"details": "See {IERC20-balanceOf}."
				},
				"decimals()": {
					"details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
				},
				"name()": {
					"details": "Returns the name of the token."
				},
				"symbol()": {
					"details": "Returns the symbol of the token, usually a shorter version of the name."
				},
				"totalSupply()": {
					"details": "See {IERC20-totalSupply}."
				},
				"transfer(address,uint256)": {
					"details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
				}
			},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/ERC20.sol": "BasicERC20Token"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
			"keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
			"license": "MIT",
			"urls": [
				"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
				"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
			]
		},
		"@openzeppelin/contracts/token/ERC20/ERC20.sol": {
			"keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
			"license": "MIT",
			"urls": [
				"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
				"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
			]
		},
		"@openzeppelin/contracts/token/ERC20/IERC20.sol": {
			"keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
			"license": "MIT",
			"urls": [
				"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
				"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
			]
		},
		"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
			"keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
			"license": "MIT",
			"urls": [
				"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
				"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
			]
		},
		"@openzeppelin/contracts/utils/Context.sol": {
			"keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
			"license": "MIT",
			"urls": [
				"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
				"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
			]
		},
		"contracts/ERC20.sol": {
			"keccak256": "0x134e9618bec58af6bf8d4d7d3a725168bce46ef540099d2a554592403dd08277",
			"license": "MIT",
			"urls": [
				"bzz-raw://4b7e8c726c8984abca762d68626927958f0b5d0c51caabba1cf0e6113889914e",
				"dweb:/ipfs/Qmb4Q3XbVzKqiPS98VnQNwwYsa2NH4vLErjHfxDGCtV5tN"
			]
		}
	},
	"version": 1
}