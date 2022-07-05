import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";

function blog(props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog Page</title>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`
              )
            }
          />
        </Head>
        <div>
          this is blog page. <Link href="/">Go to home page.</Link>
        </div>
      </Layout>
    </>
  );
}

export default blog;
