import React, { useState } from "react";

const Alert = ({ msg, error }) => {
  const [close, setClose] = useState(true);
  const handleClick = () => {
    this.parentElement.style.display = "none";
  };
  return (
    <div className={`alert ${error ? "error-msg" : ""}`}>
      <span className="closebtn" onClick={handleClick}>
        &times;
      </span>
      <strong>Error!</strong>
      {msg}!.
    </div>
  );
};

export default Alert;
