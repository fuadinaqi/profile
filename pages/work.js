import Head from "next/head";
import WorkView from "../domains/Work";

export default function Work() {
  return (
    <>
      <Head>
        <title>My work | Muhammad Fuadi Naqi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <WorkView />
    </>
  );
}
