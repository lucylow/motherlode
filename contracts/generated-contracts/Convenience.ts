/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ConvenienceInterface extends ethers.utils.Interface {
  functions: {
    "api3Pool()": FunctionFragment;
    "api3Token()": FunctionFragment;
    "erc20Addresses(uint256)": FunctionFragment;
    "getDynamicVoteData(uint8,address,uint256[])": FunctionFragment;
    "getOpenVoteIds(uint8)": FunctionFragment;
    "getStaticVoteData(uint8,address,uint256[])": FunctionFragment;
    "getTreasuryAndUserDelegationData(address)": FunctionFragment;
    "getUserStakingData(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDiscussionUrl(uint8,uint256,string)": FunctionFragment;
    "setErc20Addresses(address[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "votingAppTypeToVoteIdToDiscussionUrl(uint8,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "api3Pool", values?: undefined): string;
  encodeFunctionData(functionFragment: "api3Token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "erc20Addresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDynamicVoteData",
    values: [BigNumberish, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenVoteIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStaticVoteData",
    values: [BigNumberish, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTreasuryAndUserDelegationData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStakingData",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDiscussionUrl",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setErc20Addresses",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "votingAppTypeToVoteIdToDiscussionUrl",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "api3Pool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "api3Token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "erc20Addresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDynamicVoteData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenVoteIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStaticVoteData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTreasuryAndUserDelegationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStakingData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDiscussionUrl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setErc20Addresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingAppTypeToVoteIdToDiscussionUrl",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetDiscussionUrl(uint8,uint256,string)": EventFragment;
    "SetErc20Addresses(address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetDiscussionUrl"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetErc20Addresses"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type SetDiscussionUrlEvent = TypedEvent<
  [number, BigNumber, string],
  { votingAppType: number; voteId: BigNumber; discussionUrl: string }
>;

export type SetDiscussionUrlEventFilter = TypedEventFilter<SetDiscussionUrlEvent>;

export type SetErc20AddressesEvent = TypedEvent<
  [string[]],
  { erc20Addresses: string[] }
>;

export type SetErc20AddressesEventFilter = TypedEventFilter<SetErc20AddressesEvent>;

export interface Convenience extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConvenienceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    api3Pool(overrides?: CallOverrides): Promise<[string]>;

    api3Token(overrides?: CallOverrides): Promise<[string]>;

    erc20Addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDynamicVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], BigNumber[], BigNumber[], number[], string[], number[]] & {
        executed: boolean[];
        yea: BigNumber[];
        nay: BigNumber[];
        voterState: number[];
        delegateAt: string[];
        delegateState: number[];
      }
    >;

    getOpenVoteIds(
      votingAppType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { voteIds: BigNumber[] }>;

    getStaticVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        string[],
        BigNumber[],
        string[]
      ] & {
        startDate: BigNumber[];
        supportRequired: BigNumber[];
        minAcceptQuorum: BigNumber[];
        votingPower: BigNumber[];
        script: string[];
        userVotingPowerAt: BigNumber[];
        discussionUrl: string[];
      }
    >;

    getTreasuryAndUserDelegationData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        string[],
        number[],
        BigNumber[],
        BigNumber[],
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
      ] & {
        names: string[];
        symbols: string[];
        decimals: number[];
        balancesOfPrimaryAgent: BigNumber[];
        balancesOfSecondaryAgent: BigNumber[];
        proposalVotingPowerThreshold: BigNumber;
        userVotingPower: BigNumber;
        delegatedToUser: BigNumber;
        delegate: string;
        lastDelegationUpdateTimestamp: BigNumber;
        lastProposalTimestamp: BigNumber;
      }
    >;

    getUserStakingData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        apr: BigNumber;
        api3Supply: BigNumber;
        totalStake: BigNumber;
        totalShares: BigNumber;
        stakeTarget: BigNumber;
        userApi3Balance: BigNumber;
        userStaked: BigNumber;
        userUnstaked: BigNumber;
        userVesting: BigNumber;
        userUnstakeAmount: BigNumber;
        userUnstakeShares: BigNumber;
        userUnstakeScheduledFor: BigNumber;
        userLocked: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDiscussionUrl(
      votingAppType: BigNumberish,
      voteId: BigNumberish,
      discussionUrl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setErc20Addresses(
      _erc20Addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    votingAppTypeToVoteIdToDiscussionUrl(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  api3Pool(overrides?: CallOverrides): Promise<string>;

  api3Token(overrides?: CallOverrides): Promise<string>;

  erc20Addresses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getDynamicVoteData(
    votingAppType: BigNumberish,
    userAddress: string,
    voteIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [boolean[], BigNumber[], BigNumber[], number[], string[], number[]] & {
      executed: boolean[];
      yea: BigNumber[];
      nay: BigNumber[];
      voterState: number[];
      delegateAt: string[];
      delegateState: number[];
    }
  >;

  getOpenVoteIds(
    votingAppType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getStaticVoteData(
    votingAppType: BigNumberish,
    userAddress: string,
    voteIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber[],
      BigNumber[],
      BigNumber[],
      BigNumber[],
      string[],
      BigNumber[],
      string[]
    ] & {
      startDate: BigNumber[];
      supportRequired: BigNumber[];
      minAcceptQuorum: BigNumber[];
      votingPower: BigNumber[];
      script: string[];
      userVotingPowerAt: BigNumber[];
      discussionUrl: string[];
    }
  >;

  getTreasuryAndUserDelegationData(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string[],
      string[],
      number[],
      BigNumber[],
      BigNumber[],
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber
    ] & {
      names: string[];
      symbols: string[];
      decimals: number[];
      balancesOfPrimaryAgent: BigNumber[];
      balancesOfSecondaryAgent: BigNumber[];
      proposalVotingPowerThreshold: BigNumber;
      userVotingPower: BigNumber;
      delegatedToUser: BigNumber;
      delegate: string;
      lastDelegationUpdateTimestamp: BigNumber;
      lastProposalTimestamp: BigNumber;
    }
  >;

  getUserStakingData(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      apr: BigNumber;
      api3Supply: BigNumber;
      totalStake: BigNumber;
      totalShares: BigNumber;
      stakeTarget: BigNumber;
      userApi3Balance: BigNumber;
      userStaked: BigNumber;
      userUnstaked: BigNumber;
      userVesting: BigNumber;
      userUnstakeAmount: BigNumber;
      userUnstakeShares: BigNumber;
      userUnstakeScheduledFor: BigNumber;
      userLocked: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDiscussionUrl(
    votingAppType: BigNumberish,
    voteId: BigNumberish,
    discussionUrl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setErc20Addresses(
    _erc20Addresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  votingAppTypeToVoteIdToDiscussionUrl(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    api3Pool(overrides?: CallOverrides): Promise<string>;

    api3Token(overrides?: CallOverrides): Promise<string>;

    erc20Addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getDynamicVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], BigNumber[], BigNumber[], number[], string[], number[]] & {
        executed: boolean[];
        yea: BigNumber[];
        nay: BigNumber[];
        voterState: number[];
        delegateAt: string[];
        delegateState: number[];
      }
    >;

    getOpenVoteIds(
      votingAppType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getStaticVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber[],
        BigNumber[],
        BigNumber[],
        BigNumber[],
        string[],
        BigNumber[],
        string[]
      ] & {
        startDate: BigNumber[];
        supportRequired: BigNumber[];
        minAcceptQuorum: BigNumber[];
        votingPower: BigNumber[];
        script: string[];
        userVotingPowerAt: BigNumber[];
        discussionUrl: string[];
      }
    >;

    getTreasuryAndUserDelegationData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        string[],
        number[],
        BigNumber[],
        BigNumber[],
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
      ] & {
        names: string[];
        symbols: string[];
        decimals: number[];
        balancesOfPrimaryAgent: BigNumber[];
        balancesOfSecondaryAgent: BigNumber[];
        proposalVotingPowerThreshold: BigNumber;
        userVotingPower: BigNumber;
        delegatedToUser: BigNumber;
        delegate: string;
        lastDelegationUpdateTimestamp: BigNumber;
        lastProposalTimestamp: BigNumber;
      }
    >;

    getUserStakingData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        apr: BigNumber;
        api3Supply: BigNumber;
        totalStake: BigNumber;
        totalShares: BigNumber;
        stakeTarget: BigNumber;
        userApi3Balance: BigNumber;
        userStaked: BigNumber;
        userUnstaked: BigNumber;
        userVesting: BigNumber;
        userUnstakeAmount: BigNumber;
        userUnstakeShares: BigNumber;
        userUnstakeScheduledFor: BigNumber;
        userLocked: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setDiscussionUrl(
      votingAppType: BigNumberish,
      voteId: BigNumberish,
      discussionUrl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setErc20Addresses(
      _erc20Addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    votingAppTypeToVoteIdToDiscussionUrl(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SetDiscussionUrl(uint8,uint256,string)"(
      votingAppType?: BigNumberish | null,
      voteId?: BigNumberish | null,
      discussionUrl?: null
    ): SetDiscussionUrlEventFilter;
    SetDiscussionUrl(
      votingAppType?: BigNumberish | null,
      voteId?: BigNumberish | null,
      discussionUrl?: null
    ): SetDiscussionUrlEventFilter;

    "SetErc20Addresses(address[])"(
      erc20Addresses?: null
    ): SetErc20AddressesEventFilter;
    SetErc20Addresses(erc20Addresses?: null): SetErc20AddressesEventFilter;
  };

  estimateGas: {
    api3Pool(overrides?: CallOverrides): Promise<BigNumber>;

    api3Token(overrides?: CallOverrides): Promise<BigNumber>;

    erc20Addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDynamicVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOpenVoteIds(
      votingAppType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStaticVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTreasuryAndUserDelegationData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserStakingData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDiscussionUrl(
      votingAppType: BigNumberish,
      voteId: BigNumberish,
      discussionUrl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setErc20Addresses(
      _erc20Addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    votingAppTypeToVoteIdToDiscussionUrl(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    api3Pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    api3Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc20Addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDynamicVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOpenVoteIds(
      votingAppType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStaticVoteData(
      votingAppType: BigNumberish,
      userAddress: string,
      voteIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTreasuryAndUserDelegationData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserStakingData(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDiscussionUrl(
      votingAppType: BigNumberish,
      voteId: BigNumberish,
      discussionUrl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setErc20Addresses(
      _erc20Addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    votingAppTypeToVoteIdToDiscussionUrl(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
