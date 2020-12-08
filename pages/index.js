import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import PopularGames from "../components/Games/PopularGames/PopularGames";
import UpcomingGames from "../components/Games/UpcomingGames/UpcomingGames";

const Home = () => {
  return (
    <div className="index bg-gray-50">
      <Head>
        <title>Next Game Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <PopularGames heading="Popular Games"/>
      <UpcomingGames heading="Upcoming Games"/>
    </div>
  );
};

export default Home;
