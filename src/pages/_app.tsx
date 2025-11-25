import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/profile.jpg" />
        <title>Yueran Sarah Qi</title>
        <meta name="description" content="Sarah Qi's personal website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
