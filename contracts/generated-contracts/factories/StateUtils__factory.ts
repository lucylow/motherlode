/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StateUtils, StateUtilsInterface } from "../StateUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelockManagerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "aprUpdateStep",
        type: "uint256",
      },
    ],
    name: "SetAprUpdateStep",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimsManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "SetClaimsManagerStatus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "agentAppPrimary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "agentAppSecondary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "votingAppPrimary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "votingAppSecondary",
        type: "address",
      },
    ],
    name: "SetDaoApps",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxApr",
        type: "uint256",
      },
    ],
    name: "SetMaxApr",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minApr",
        type: "uint256",
      },
    ],
    name: "SetMinApr",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalVotingPowerThreshold",
        type: "uint256",
      },
    ],
    name: "SetProposalVotingPowerThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeTarget",
        type: "uint256",
      },
    ],
    name: "SetStakeTarget",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "unstakeWaitPeriod",
        type: "uint256",
      },
    ],
    name: "SetUnstakeWaitPeriod",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastProposalTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "votingApp",
        type: "address",
      },
    ],
    name: "UpdatedLastProposalTimestamp",
    type: "event",
  },
  {
    inputs: [],
    name: "EPOCH_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_VESTING_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "agentAppPrimary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "agentAppSecondary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "api3Token",
    outputs: [
      {
        internalType: "contract IApi3Token",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "apr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aprUpdateStep",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimsManagerStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochIndexOfLastReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochIndexToReward",
    outputs: [
      {
        internalType: "uint32",
        name: "atBlock",
        type: "uint32",
      },
      {
        internalType: "uint224",
        name: "amount",
        type: "uint224",
      },
      {
        internalType: "uint256",
        name: "totalSharesThen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakeThen",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGenesisEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolShares",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint224",
        name: "value",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalVotingPowerThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aprUpdateStep",
        type: "uint256",
      },
    ],
    name: "setAprUpdateStep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "claimsManager",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setClaimsManagerStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agentAppPrimary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_agentAppSecondary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_votingAppPrimary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_votingAppSecondary",
        type: "address",
      },
    ],
    name: "setDaoApps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxApr",
        type: "uint256",
      },
    ],
    name: "setMaxApr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minApr",
        type: "uint256",
      },
    ],
    name: "setMinApr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalVotingPowerThreshold",
        type: "uint256",
      },
    ],
    name: "setProposalVotingPowerThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakeTarget",
        type: "uint256",
      },
    ],
    name: "setStakeTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unstakeWaitPeriod",
        type: "uint256",
      },
    ],
    name: "setUnstakeWaitPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelockManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "updateLastProposalTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToLockedCalculation",
    outputs: [
      {
        internalType: "uint256",
        name: "initialIndEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextIndEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vesting",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeShares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastDelegationUpdateTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastProposalTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingAppPrimary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingAppSecondary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405262000018662386f26fc10000603262000313565b600855600a62000031662386f26fc10000601962000313565b6200003d9190620002f2565b60095562000054662386f26fc10000604b62000313565b600a55662386f26fc10000600b5562093a80600c55600a662386f26fc100006200007f9190620002f2565b600d556002600954600a54620000969190620002d7565b620000a29190620002f2565b600e55348015620000b257600080fd5b50604051620012e8380380620012e8833981016040819052620000d591620002a0565b6001600160a01b038216620001315760405162461bcd60e51b815260206004820152601760248201527f506f6f6c3a20496e76616c69642041706933546f6b656e00000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620001895760405162461bcd60e51b815260206004820152601d60248201527f506f6f6c3a20496e76616c69642054696d656c6f636b4d616e61676572000000604482015260640162000128565b601280546001600160a01b031916331790556001600160601b0319606083811b821660a05282901b1660c052620001c360106001620001eb565b60016007556000620001d962093a8042620002f2565b6080819052600655506200034b915050565b63ffffffff4311156200020e57634e487b7160e01b600052600160045260246000fd5b6001600160e01b038111156200023457634e487b7160e01b600052600160045260246000fd5b6040805180820190915263ffffffff43811682526001600160e01b0392831660208084019182528554600181018755600096875295209251905190931664010000000002921691909117910155565b80516001600160a01b03811681146200029b57600080fd5b919050565b60008060408385031215620002b3578182fd5b620002be8362000283565b9150620002ce6020840162000283565b90509250929050565b60008219821115620002ed57620002ed62000335565b500190565b6000826200030e57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161562000330576200033062000335565b500290565b634e487b7160e01b600052601160045260246000fd5b60805160a05160601c60c05160601c610f60620003886000396000610517015260006103450152600081816104f001526108d10152610f606000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80638b0e9f3f1161011a578063bf5669bd116100ad578063e685dee01161007c578063e685dee01461055e578063e7460a5214610571578063ea26afd71461057a578063f68308c71461058d578063fcde28cc146105a057600080fd5b8063bf5669bd14610512578063db6f162e14610539578063df60d80414610542578063e3b341741461054b57600080fd5b8063a87430ba116100e9578063a87430ba14610453578063ac4746ab146104d8578063b3609b53146104e2578063b70e6be6146104eb57600080fd5b80638b0e9f3f1461040b57806392093b36146104145780639745f5631461041d578063a78c6ddc1461044057600080fd5b8063613d517d1161019257806375c385d61161016157806375c385d6146103a0578063784b3c5d146103d75780637fd63875146103e05780638794eb4f146103f357600080fd5b8063613d517d14610340578063634cc19814610367578063681a9ad71461037a578063756b2a8b1461038d57600080fd5b80634091fd3f116101ce5780634091fd3f146102a15780634eb05c471461031857806357ded9c91461032f5780635856130a1461033857600080fd5b8062609187146101ff5780630825af751461022f5780632b2c226214610279578063344965e21461028e575b600080fd5b600254610212906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61025e61023d366004610db2565b60116020526000908152604090208054600182015460029092015490919083565b60408051938452602084019290925290820152606001610226565b61028c610287366004610e60565b6105b3565b005b600154610212906001600160a01b031681565b6102e96102af366004610e60565b60056020526000908152604090208054600182015460029092015463ffffffff8216926401000000009092046001600160e01b0316919084565b6040805163ffffffff90951685526001600160e01b039093166020850152918301526060820152608001610226565b61032160085481565b604051908152602001610226565b610321600e5481565b610321603481565b6102127f000000000000000000000000000000000000000000000000000000000000000081565b61028c610375366004610db2565b610622565b600054610212906001600160a01b031681565b61028c61039b366004610e60565b6106f1565b6103b36103ae366004610e60565b6107b7565b6040805163ffffffff90931683526001600160e01b03909116602083015201610226565b61032160095481565b61028c6103ee366004610e60565b6107f0565b6103fb6108cd565b6040519015158152602001610226565b61032160075481565b610321600a5481565b6103fb61042b366004610db2565b60046020526000908152604090205460ff1681565b61028c61044e366004610dd3565b610903565b6104a3610461366004610db2565b600f6020528060005260406000206000915090508060030154908060040154908060050154908060060154908060070154908060080154908060090154905087565b604080519788526020880196909652948601939093526060850191909152608084015260a083015260c082015260e001610226565b61032162093a8081565b610321600d5481565b6103217f000000000000000000000000000000000000000000000000000000000000000081565b6102127f000000000000000000000000000000000000000000000000000000000000000081565b610321600b5481565b61032160065481565b61028c610559366004610e60565b610ad4565b600354610212906001600160a01b031681565b610321600c5481565b61028c610588366004610e60565b610b9a565b61028c61059b366004610e26565b610c66565b61028c6105ae366004610e60565b610ce4565b6000546001600160a01b031633146105e65760405162461bcd60e51b81526004016105dd90610ea8565b60405180910390fd5b600b8190556040518181527f9825cec2fb9b95eff07739ba941019e5f162bb5d2e266f53583f485282c5ea96906020015b60405180910390a150565b6002546001600160a01b031633148061064557506003546001600160a01b031633145b6106915760405162461bcd60e51b815260206004820152601b60248201527f506f6f6c3a2043616c6c6572206e6f7420766f74696e6720617070000000000060448201526064016105dd565b6001600160a01b0381166000818152600f6020908152604091829020426009909101819055825190815233918101919091527fceaef3a8d9336089c649bcf1ea9dd1ae52f5c42ea01f8707ecdd57ea773aa3ee910160405180910390a250565b6000546001600160a01b031633148061071457506001546001600160a01b031633145b6107305760405162461bcd60e51b81526004016105dd90610e78565b600a548111156107825760405162461bcd60e51b815260206004820152601d60248201527f506f6f6c3a204d696e20415052206c6172676572207468616e206d617800000060448201526064016105dd565b60098190556040518181527f73b1a5670aa918e2286672e7dd760a6710d209683665bd8843a04f8710a2be2490602001610617565b601081815481106107c757600080fd5b60009182526020909120015463ffffffff8116915064010000000090046001600160e01b031682565b6000546001600160a01b0316331461081a5760405162461bcd60e51b81526004016105dd90610ea8565b61082c600a662386f26fc10000610edf565b811015801561084c5750610848662386f26fc10000600a610eff565b8111155b6108985760405162461bcd60e51b815260206004820152601e60248201527f506f6f6c3a205468726573686f6c64206f757473696465206c696d697473000060448201526064016105dd565b600d8190556040518181527f3658b89a2695dcc4dd2433dc2d79647860cf037c444e112eeddd04063abfb3b690602001610617565b60007f00000000000000000000000000000000000000000000000000000000000000006108fd62093a8042610edf565b14905090565b6000546001600160a01b031633148061093a57506000546001600160a01b031615801561093a57506012546001600160a01b031633145b6109ac5760405162461bcd60e51b815260206004820152603e60248201527f506f6f6c3a2043616c6c6572206e6f74207072696d617279206167656e74206f60448201527f72206465706c6f79657220696e697469616c697a696e672076616c756573000060648201526084016105dd565b6001600160a01b038416158015906109cc57506001600160a01b03831615155b80156109e057506001600160a01b03821615155b80156109f457506001600160a01b03811615155b610a395760405162461bcd60e51b8152602060048201526016602482015275506f6f6c3a20496e76616c69642044414f206170707360501b60448201526064016105dd565b600080546001600160a01b038681166001600160a01b031992831681179093556001805487831690841681179091556002805487841690851681179091556003805493871693909416831790935560408051948552602085019190915283019190915260608201527f71b1ce304e98c2a645f0c32f4c9e3ae4d5dbe6717a8c17ccefb0083635afdc159060800160405180910390a150505050565b6000546001600160a01b0316331480610af757506001546001600160a01b031633145b610b135760405162461bcd60e51b81526004016105dd90610e78565b600954811015610b655760405162461bcd60e51b815260206004820152601e60248201527f506f6f6c3a204d61782041505220736d616c6c6572207468616e206d696e000060448201526064016105dd565b600a8190556040518181527f9bfee4483872bc31d94cf9864f4992fdbe3b588515c9f98f952c41a46720bc1190602001610617565b6000546001600160a01b0316331480610bbd57506001546001600160a01b031633145b610bd95760405162461bcd60e51b81526004016105dd90610e78565b670de0b6b3a7640000811115610c315760405162461bcd60e51b815260206004820152601e60248201527f506f6f6c3a20496e76616c69642070657263656e746167652076616c7565000060448201526064016105dd565b60088190556040518181527f30df07121af80c9a50a8fcfddf8aa9f537a550edb930294c6370d4c05632ba1590602001610617565b6000546001600160a01b03163314610c905760405162461bcd60e51b81526004016105dd90610ea8565b6001600160a01b038216600081815260046020526040808220805460ff191685151590811790915590519092917fbf0d659300b2b4f4ddd43c45c5f2a7deafbf3e8bc8617173b6ef8937b19ca32191a35050565b6000546001600160a01b03163314610d0e5760405162461bcd60e51b81526004016105dd90610ea8565b62093a80811015610d615760405162461bcd60e51b815260206004820152601f60248201527f506f6f6c3a20506572696f642073686f72746572207468616e2065706f63680060448201526064016105dd565b600c8190556040518181527f74c87fa8b1e9d1840c40ff666c878e91e081cb2b15fa68a62e584f07fd4ebff290602001610617565b80356001600160a01b0381168114610dad57600080fd5b919050565b600060208284031215610dc3578081fd5b610dcc82610d96565b9392505050565b60008060008060808587031215610de8578283fd5b610df185610d96565b9350610dff60208601610d96565b9250610e0d60408601610d96565b9150610e1b60608601610d96565b905092959194509250565b60008060408385031215610e38578182fd5b610e4183610d96565b915060208301358015158114610e55578182fd5b809150509250929050565b600060208284031215610e71578081fd5b5035919050565b602080825260169082015275141bdbdb0e8810d85b1b195c881b9bdd081859d95b9d60521b604082015260600190565b6020808252601e908201527f506f6f6c3a2043616c6c6572206e6f74207072696d617279206167656e740000604082015260600190565b600082610efa57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610f2557634e487b7160e01b81526011600452602481fd5b50029056fea2646970667358221220c9b84b74d21a13c7c056348bab022839afbf3baa0e0689f22813c587c5d0555d64736f6c63430008040033";

type StateUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StateUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StateUtils__factory extends ContractFactory {
  constructor(...args: StateUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    api3TokenAddress: string,
    timelockManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StateUtils> {
    return super.deploy(
      api3TokenAddress,
      timelockManagerAddress,
      overrides || {}
    ) as Promise<StateUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    timelockManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      api3TokenAddress,
      timelockManagerAddress,
      overrides || {}
    );
  }
  attach(address: string): StateUtils {
    return super.attach(address) as StateUtils;
  }
  connect(signer: Signer): StateUtils__factory {
    return super.connect(signer) as StateUtils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StateUtilsInterface {
    return new utils.Interface(_abi) as StateUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateUtils {
    return new Contract(address, _abi, signerOrProvider) as StateUtils;
  }
}
