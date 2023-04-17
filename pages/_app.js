import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Кафедра уравнений в частных производных и теории вероятности | Кафедра математического факультета ВГУ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
}
