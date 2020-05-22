import Head from "next/head";
import ColorBlocksView from "domains/Game/sections/ColorBlocks";
import useWithoutPhoto from "components/Layout/hooks/useWithoutPhoto";

export default function ColorBlocks() {
  useWithoutPhoto();

  return (
    <>
      <Head>
        <title>Color Blocks | Muhammad Fuadi Naqi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ColorBlocksView />
    </>
  );
}
