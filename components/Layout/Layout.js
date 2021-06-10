import React from "react";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Odarlis Perez - Diplomado</title>
        <meta
          name="description"
          content="Tareas del diplomado por Odarlis Perez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
