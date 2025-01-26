import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Missing VITE_WALLET_CONNECT_PROJECT_ID environment variable');
}

const { publicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: [mainnet] }),
  publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, [mainnet]);