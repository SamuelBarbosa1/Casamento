// src/app/page.tsx
import React from 'react';
import Head from 'next/head';
import Convidados from './components/Convidados';
import Cronometro from './components/Cronometro';
import GuestsConfirm from './components/GuestsConfirm';
import Localizacao from './components/Localizacao';
import Madrinhas from './components/Madrinhas';
import MainBanner from './components/MainBanner';
import Navbar from './components/Navbar';
import Padrinhos from './components/Padrinhos';
import SaveTheDate from './components/SaveTheDate';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ludmilla e Jessé</title>
      </Head>
      <Navbar />
      <div className="flex flex-col gap-6 min-h-screen">
        <MainBanner />
        <SaveTheDate />
        <Localizacao />
        <Convidados />
        <Madrinhas />
        <Padrinhos />
        <GuestsConfirm />
        <Cronometro />
      </div>
    </>
  );
};

export default Home;
