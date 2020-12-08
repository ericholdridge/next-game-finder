import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { loadDetail } from "../../store/actions/detailAction";

const GameCard = ({ date, name, img, imgAlt, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <div
      className="shadow-2xl rounded mt-6 bg-white relative cursor-pointer w-6/7 sm:w-6/7 md:w-3/7 lg:w-3/7 xl:w-2/7"
      onClick={loadDetailHandler}
    >
      <h1 className="text-center font-bold pt-4 pb-2">{name}</h1>
      <span className="block text-center pb-2">{date}</span>
      <Image
        src={img}
        alt={imgAlt}
        width={480}
        height={380}
        layout="responsive"
        className="rounded-b text-0"
      />
    </div>
  );
};

export default GameCard;
