import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={"title"}>codyNog&apos;s Labo</title>
        <meta name="description" content={"codyNog's Labo"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
