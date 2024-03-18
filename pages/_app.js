import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = {
  chainId: 5,
  rpc: ["https://goerli.infura.io/v3/"],
  nativeCurrency: {
    decimals: 18,
    name: "Goerli",
    symbol: "ETH",
  },
  shortName: "GETH",
  slug: "Goerli",
  testnet: true,
  chain: "Goerli",
  name: "Goerli",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
