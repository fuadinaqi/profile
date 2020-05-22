import Head from "next/head";
import { useRouter } from "next/router";
import MathBlocksLevelView from "domains/Game/sections/MathBlocks/Level";
import useWithoutPhoto from "components/Layout/hooks/useWithoutPhoto";

export default function MathBlocks() {
  useWithoutPhoto();
  const {
    query: { level },
  } = useRouter();

  return (
    <>
      <Head>
        <title>{`Math Blocks lv ${level} | Muhammad Fuadi Naqi`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MathBlocksLevelView />
    </>
  );
}
