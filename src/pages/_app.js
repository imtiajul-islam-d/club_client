import { store } from "@/app/store";
import Layout from "@/components/Layouts/MainLayout/MainLayout";
import Loading from "@/components/Loading/Loading";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   const b = document.querySelector("body");
  //   // console.log(b.isContentEditable);

  //   console.log(b.isConnected);
  //   // console.log(b.addEventListener = "lk");
  // });
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Roboto:wght@400;700&family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="./public/favicon.png"/>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
