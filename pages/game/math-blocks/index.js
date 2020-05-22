import Head from "next/head";
import MathBlocksView from "domains/Game/sections/MathBlocks";
import useWithoutPhoto from "components/Layout/hooks/useWithoutPhoto";

export default function MathBlocks() {
  useWithoutPhoto();

  return (
    <>
      <Head>
        <title>Math Blocks | Muhammad Fuadi Naqi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MathBlocksView />
    </>
  );
}
