import { useContext, useEffect } from "react";
import Head from "next/head";
import GameView from "../domains/Game";
import { LayoutContext } from "components/Layout";

export default function Contact() {
  const { setWithPhoto } = useContext(LayoutContext);

  useEffect(() => {
    setWithPhoto(false);
    return () => {
      setWithPhoto(true);
    };
  }, []);

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
