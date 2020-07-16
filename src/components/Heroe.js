import React from "react";

function Heroe({ item }) {
  return (
    <div className="hero-container">
      <div className="avatar">
        <img src={item.avatarURL} alt="" />
      </div>

      <div className="name-container">
        <span className="name">{item.nombre}</span>
        <span className="real-name">{item.nombreReal}</span>
      </div>
    </div>
  );
}

export default Heroe;
