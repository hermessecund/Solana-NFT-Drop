import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useProgram , useClaimNFT, useProrgamMetadata, useClaimConditions } from "@thirdweb-dev/react/solana"
import type { NextPage } from "next";
import Claim from "../components/Claim";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
     const { program } = useProgram("3PHKaLH1QwP3jWbwBvn3PjhsW4b7cgpTPKbEKNwsgKJT", "nft-drop");
     const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);
    return(
      <div>
        <WalletMultiButton />
        <Claim />
      </div>
    )
};

export default Home;
