import React from "react";

function Heroe({ item }) {
  return (
    <div class="hero-container">
      <div class="avatar">
        <img src={item.avatarURL} alt="heroe-img" />
      </div>

      <div class="name-container">
        <span class="name">{item.nombre}</span>
        <span class="real-name">{item.nombreReal}</span>
      </div>
    </div>
  );
}

export default Heroe;
