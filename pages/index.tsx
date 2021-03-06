import Head from "next/head";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ContactForm } from "../src/components/Form";
import { Widget } from "../src/components/Widget/Widget";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Welcome } from "../src/components/Welcome";
import { Advantages } from "../src/components/Advantages";
import { title } from "process";

function Home() {
  return (
    <div className="relative ">
      <Head>
        <title>Fótum Engenharia</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Header />
        <Welcome />
        <Advantages />

        <ContactForm />

        <Footer />

        <Widget />
      </main>
    </div>
  );
}
export default Home;
