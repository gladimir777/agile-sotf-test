import React, { useState } from "react";

const Alert = ({ msg, error }) => {
  const [close, setClose] = useState(false);
  const handleClick = () => {
    this.parentElement.style.display = "none";
    setClose(true);
  };
  return (
    <div className={`alert ${error && !close ? "error-msg" : ""}`}>
      <span className="closebtn" onClick={handleClick}>
        &times;
      </span>
      <strong>Error!</strong>
      {msg}!.
    </div>
  );
};

export default Alert;
