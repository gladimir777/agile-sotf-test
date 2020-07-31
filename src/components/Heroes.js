import React from "react";
import Heroe from "./Heroe";
import { ReactComponent as Loading } from "../../src/loading.svg";

function Heroes({ isLoading, heroes }) {
  return (
    <div className="heroes-wrapper">
      {isLoading && <Loading className="loader" />}
      <div className="heroes-container">
        {heroes.map((item, index) => (
          <Heroe key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Heroes;
