import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../../store/actions/gamesAction";
import GameCard from "../GameCard";

const UpcomingGames = ({ heading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  // Get the data back
  const games = useSelector((state) => state.games);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl text-center md:text-left mt-14">{heading}</h1>
      <div className="flex justify-center md:justify-between flex-wrap">
        {games.upcoming.map((popular, index) => (
          <GameCard
            key={index}
            id={popular.id}
            name={popular.name}
            date={popular.released}
            img={popular.background_image}
            imgAlt={popular.name}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingGames;
