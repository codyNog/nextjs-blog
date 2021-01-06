import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={"title"}>codyNog's Labo</title>
        <meta name="description">codyNog's Labo</meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
