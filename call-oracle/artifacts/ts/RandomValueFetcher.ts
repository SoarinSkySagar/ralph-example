/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as RandomValueFetcherContractJson } from "../RandomValueFetcher.ral.json";
import { getContractByCodeHash } from "./contracts";
import { DIAOracleValue, DIARandomValue, AllStructs } from "./types";

// Custom types for the contract
export namespace RandomValueFetcherTypes {
  export type Fields = {
    oracle: HexString;
    lastRound: bigint;
    value: DIARandomValue;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    update: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };

  export interface SignExecuteMethodTable {
    update: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  RandomValueFetcherInstance,
  RandomValueFetcherTypes.Fields
> {
  encodeFields(fields: RandomValueFetcherTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as RandomValueFetcherTypes.Fields;
  }

  at(address: string): RandomValueFetcherInstance {
    return new RandomValueFetcherInstance(address);
  }

  tests = {
    update: async (
      params: Omit<
        TestContractParamsWithoutMaps<RandomValueFetcherTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "update", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const RandomValueFetcher = new Factory(
  Contract.fromJson(
    RandomValueFetcherContractJson,
    "",
    "9f3715ba3cf130bd8398a3338315876a13c2ecbae485b4a6a439c7e0f5331564",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class RandomValueFetcherInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<RandomValueFetcherTypes.State> {
    return fetchContractState(RandomValueFetcher, this);
  }

  view = {
    update: async (
      params?: RandomValueFetcherTypes.CallMethodParams<"update">
    ): Promise<RandomValueFetcherTypes.CallMethodResult<"update">> => {
      return callMethod(
        RandomValueFetcher,
        this,
        "update",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    update: async (
      params: RandomValueFetcherTypes.SignExecuteMethodParams<"update">
    ): Promise<RandomValueFetcherTypes.SignExecuteMethodResult<"update">> => {
      return signExecuteMethod(RandomValueFetcher, this, "update", params);
    },
  };
}
