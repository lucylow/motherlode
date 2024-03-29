/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IApi3Voting, IApi3VotingInterface } from "../IApi3Voting";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_voteId",
        type: "uint256",
      },
    ],
    name: "getVote",
    outputs: [
      {
        internalType: "bool",
        name: "open",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint64",
        name: "startDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "snapshotBlock",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "supportRequired",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "minAcceptQuorum",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "yea",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votingPower",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "script",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_voteId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
    ],
    name: "getVoterState",
    outputs: [
      {
        internalType: "enum IApi3Voting.VoterState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minAcceptQuorumPct",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votesLength",
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
];

export class IApi3Voting__factory {
  static readonly abi = _abi;
  static createInterface(): IApi3VotingInterface {
    return new utils.Interface(_abi) as IApi3VotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IApi3Voting {
    return new Contract(address, _abi, signerOrProvider) as IApi3Voting;
  }
}
