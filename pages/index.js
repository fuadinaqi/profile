import Head from "next/head";
import ProfileView from "../domains/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me | Muhammad Fuadi Naqi </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ProfileView />
    </>
  );
}
