import React from "react";
import Heroe from "./Heroe";
import { ReactComponent as Loading } from "../../src/loading.svg";

function Heroes({ heroes, isLoading }) {
  return (
    <div className="heroes-wrapper">
      {isLoading && <Loading className="loader" />}
      <div className="heroes-container">
        {heroes.map((item) => (
          <Heroe key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Heroes;
