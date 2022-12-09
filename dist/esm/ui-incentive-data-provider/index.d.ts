import { providers } from 'ethers';
import { Denominations } from '../cl-feed-registry/types/ChainlinkFeedsRegistryTypes';
import { UiIncentiveDataProvider as UiIncentiveDataProviderContract } from './typechain/UiIncentiveDataProvider';
import { FullReservesIncentiveDataResponse, ReserveIncentiveDataHumanizedResponse, ReserveIncentiveDataResponse, ReserveIncentiveWithFeedsResponse, UserReserveIncentiveDataHumanizedResponse, UserReserveIncentiveDataResponse } from './types/UiIncentiveDataProviderTypes';
import { ReservesHelperInput, UserReservesHelperInput } from "contract-helpers/src/index";
export * from './types/UiIncentiveDataProviderTypes';
export interface UiIncentiveDataProviderInterface {
    getFullReservesIncentiveData: (args: UserReservesHelperInput) => Promise<FullReservesIncentiveDataResponse>;
    getReservesIncentivesData: (args: ReservesHelperInput) => Promise<ReserveIncentiveDataResponse[]>;
    getUserReservesIncentivesData: (args: UserReservesHelperInput) => Promise<UserReserveIncentiveDataResponse[]>;
    getReservesIncentivesDataHumanized: (args: ReservesHelperInput) => Promise<ReserveIncentiveDataHumanizedResponse[]>;
    getUserReservesIncentivesDataHumanized: (args: UserReservesHelperInput) => Promise<UserReserveIncentiveDataHumanizedResponse[]>;
    getIncentivesDataWithPrice: (args: GetIncentivesDataWithPriceType) => Promise<ReserveIncentiveWithFeedsResponse[]>;
}
export interface UiIncentiveDataProviderContext {
    incentiveDataProviderAddress: string;
    provider: providers.Provider;
    chainId: number;
}
export interface FeedResultSuccessful {
    rewardTokenAddress: string;
    answer: string;
    updatedAt: number;
    decimals: number;
}
export interface GetIncentivesDataWithPriceType {
    lendingPoolAddressProvider: string;
    chainlinkFeedsRegistry?: string;
    quote?: Denominations;
}
export declare class UiIncentiveDataProvider implements UiIncentiveDataProviderInterface {
    readonly _contract: UiIncentiveDataProviderContract;
    private readonly _chainlinkFeedsRegistries;
    private readonly _context;
    private readonly chainId;
    /**
     * Constructor
     * @param context The ui incentive data provider context
     */
    constructor(context: UiIncentiveDataProviderContext);
    /**
     *  Get the full reserve incentive data for the lending pool and the user
     * @param user The user address
     */
    getFullReservesIncentiveData({ user, lendingPoolAddressProvider }: UserReservesHelperInput): Promise<FullReservesIncentiveDataResponse>;
    /**
     *  Get the reserve incentive data for the lending pool
     */
    getReservesIncentivesData({ lendingPoolAddressProvider }: ReservesHelperInput): Promise<ReserveIncentiveDataResponse[]>;
    getReservesIncentivesDataHumanized({ lendingPoolAddressProvider }: ReservesHelperInput): Promise<ReserveIncentiveDataHumanizedResponse[]>;
    getUserReservesIncentivesDataHumanized({ user, lendingPoolAddressProvider }: UserReservesHelperInput): Promise<UserReserveIncentiveDataHumanizedResponse[]>;
    /**
     *  Get the reserve incentive data for the user
     * @param user The user address
     */
    getUserReservesIncentivesData({ user, lendingPoolAddressProvider }: UserReservesHelperInput): Promise<UserReserveIncentiveDataResponse[]>;
    getIncentivesDataWithPrice({ lendingPoolAddressProvider, chainlinkFeedsRegistry, quote, }: GetIncentivesDataWithPriceType): Promise<ReserveIncentiveWithFeedsResponse[]>;
    private readonly _getFeed;
    private _formatIncentiveData;
    private _formatUserIncentiveData;
}
//# sourceMappingURL=index.d.ts.map