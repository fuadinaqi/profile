import Head from "next/head";
import { useRouter } from "next/router";
import ColorBlocksLevelView from "domains/Game/sections/ColorBlocks/Level";
import useWithoutPhoto from "components/Layout/hooks/useWithoutPhoto";

export default function ColorBlocks() {
  useWithoutPhoto();
  const router = useRouter();
  const level = router?.query?.level || 1;

  return (
    <>
      <Head>
        <title>{`Color Blocks lv ${level} | Muhammad Fuadi Naqi`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ColorBlocksLevelView />
    </>
  );
}
