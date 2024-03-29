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

export interface IApi3PoolInterface extends ethers.utils.Interface {
  functions: {
    "totalSharesAt(uint256)": FunctionFragment;
    "userVotingPowerAt(address,uint256)": FunctionFragment;
    "updateLastProposalTimestamp(address)": FunctionFragment;
    "getUser(address)": FunctionFragment;
    "isGenesisEpoch()": FunctionFragment;
    "EPOCH_LENGTH()": FunctionFragment;
    "proposalVotingPowerThreshold()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "totalSharesAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userVotingPowerAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLastProposalTimestamp",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getUser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isGenesisEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EPOCH_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalVotingPowerThreshold",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "totalSharesAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userVotingPowerAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLastProposalTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isGenesisEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EPOCH_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalVotingPowerThreshold",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IApi3Pool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IApi3PoolInterface;

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
    totalSharesAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userVotingPowerAt(
      userAddress: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateLastProposalTimestamp(
      userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getUser(
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
        BigNumber
      ] & {
        unstaked: BigNumber;
        vesting: BigNumber;
        unstakeAmount: BigNumber;
        unstakeShares: BigNumber;
        unstakeScheduledFor: BigNumber;
        lastDelegationUpdateTimestamp: BigNumber;
        lastProposalTimestamp: BigNumber;
      }
    >;

    isGenesisEpoch(overrides?: CallOverrides): Promise<[boolean]>;

    EPOCH_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalVotingPowerThreshold(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  totalSharesAt(
    _block: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userVotingPowerAt(
    userAddress: string,
    _block: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateLastProposalTimestamp(
    userAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getUser(
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
      BigNumber
    ] & {
      unstaked: BigNumber;
      vesting: BigNumber;
      unstakeAmount: BigNumber;
      unstakeShares: BigNumber;
      unstakeScheduledFor: BigNumber;
      lastDelegationUpdateTimestamp: BigNumber;
      lastProposalTimestamp: BigNumber;
    }
  >;

  isGenesisEpoch(overrides?: CallOverrides): Promise<boolean>;

  EPOCH_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  proposalVotingPowerThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    totalSharesAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userVotingPowerAt(
      userAddress: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLastProposalTimestamp(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getUser(
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
        BigNumber
      ] & {
        unstaked: BigNumber;
        vesting: BigNumber;
        unstakeAmount: BigNumber;
        unstakeShares: BigNumber;
        unstakeScheduledFor: BigNumber;
        lastDelegationUpdateTimestamp: BigNumber;
        lastProposalTimestamp: BigNumber;
      }
    >;

    isGenesisEpoch(overrides?: CallOverrides): Promise<boolean>;

    EPOCH_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    proposalVotingPowerThreshold(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    totalSharesAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userVotingPowerAt(
      userAddress: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLastProposalTimestamp(
      userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getUser(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGenesisEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    EPOCH_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    proposalVotingPowerThreshold(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    totalSharesAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userVotingPowerAt(
      userAddress: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateLastProposalTimestamp(
      userAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getUser(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGenesisEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EPOCH_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalVotingPowerThreshold(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
