import Head from "next/head";
import ProfileView from "../domains/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me | Muhammad Fuadi Naqi</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="title" content="About Me | Muhammad Fuadi Naqi" />
        <meta
          name="description"
          content=" I am a Frontend Engineer who adheres to the principles of S.O.L.I.D (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)"
        />
        <meta name="publisher" content="Fuadi Naqi" />
        <meta name="author" content="Fuadi Naqi" />
        <meta name="keywords" content="Fuadi Naqi, Frontend Engineer, React, Next" />
      </Head>
      <ProfileView />
    </>
  );
}
