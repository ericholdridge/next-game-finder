import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../../store/actions/gamesAction";
import Image from "next/image";

const PopularGames = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  // Get the data back
  const games = useSelector((state) => state.games);

  return (
    <div className="games-container">
      <div className="container mx-auto flex justify-between flex-wrap">
        {games.popular.map((popular) => (
          <div className="shadow-2xl rounded mt-10">
            <div className="pt-4">
              <h1 className="text-center font-bold pt-1 pb-2">
                {popular.name}
              </h1>
              <span className="block text-center pb-2">{popular.released}</span>
              <Image
                src={popular.background_image}
                alt={popular.name}
                width={480}
                height={380}
                responsive
                className="border-4 border-red-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
