import React from "react";

const Nav = () => {
  return (
    <nav className="py-8">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-medium text-xl">Game Finder</h1>
        <ul className="flex">
          <li className="mx-4">Home</li>
          <li className="mx-4">About</li>
          <li className="ml-4">Games</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
