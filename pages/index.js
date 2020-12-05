import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../store/actions/gamesAction";
import PopularGames from "../components/Games/PopularGames/PopularGames";

const Home = () => {
  return (
    <div className="index">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <PopularGames />
    </div>
  );
};

export default Home;
