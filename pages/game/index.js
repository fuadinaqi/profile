import Head from "next/head";
import GameView from "domains/Game";
import useWithoutPhoto from "components/Layout/hooks/useWithoutPhoto";

export default function Game() {
  useWithoutPhoto();

  return (
    <>
      <Head>
        <title>Game Time | Muhammad Fuadi Naqi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GameView />
    </>
  );
}
