import React from "react";
import Heroe from "./Heroe";

function Heroes({ heroes }) {
  return (
    <div className="heroes-wrapper">
      <div className="heroes-container">
        {heroes.map((item) => (
          <Heroe key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Heroes;
