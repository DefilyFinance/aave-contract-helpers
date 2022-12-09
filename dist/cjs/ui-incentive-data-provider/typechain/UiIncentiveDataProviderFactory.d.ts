import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { ContractFactory } from '@ethersproject/contracts';
import { UiIncentiveDataProvider } from './UiIncentiveDataProvider';
export declare class UiIncentiveDataProviderFactory extends ContractFactory {
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static connect(address: string, signerOrProvider: Signer | Provider): UiIncentiveDataProvider;
}
//# sourceMappingURL=UiIncentiveDataProviderFactory.d.ts.map