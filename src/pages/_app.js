import { store } from "@/app/store";
import Layout from "@/components/Layouts/MainLayout/MainLayout";
import Loading from "@/components/Loading/Loading";
import "@/styles/globals.css";
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
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
