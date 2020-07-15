import React from "react";
import Heroe from "./Heroe";

function Heroes({ heroes }) {
  return (
    <div class="heroes-wrapper">
      <div class="heroes-container">
        {heroes.map((item) => (
          <Heroe key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Heroes;
