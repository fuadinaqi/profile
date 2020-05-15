import Head from "next/head";
import ContactView from "../domains/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me | Muhammad Fuadi Naqi</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ContactView />
    </>
  );
}
