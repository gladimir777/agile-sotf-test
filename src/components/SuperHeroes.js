import React from "react";
import Header from "./Header";
import Heroes from "./Heroes";
const SuperHeroes = ({ heroes }) => {
  return (
    <div className="super-heroe-container">
      <Header />
      <Heroes heroes={heroes} />
    </div>
  );
};

SuperHeroes.propTypes = {};

export default SuperHeroes;
