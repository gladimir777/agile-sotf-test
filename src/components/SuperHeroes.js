import React from "react";
import Header from "./Header";
import Heroes from "./Heroes";
const SuperHeroes = ({ heroes, isLoading }) => {
  return (
    <div className="super-heroe-container">
      <Header />
      <Heroes heroes={heroes} isLoading={isLoading} />
    </div>
  );
};

SuperHeroes.propTypes = {};

export default SuperHeroes;
