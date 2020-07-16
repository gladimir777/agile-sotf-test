import React from "react";

const Alert = ({ msg, error }) => {
  return (
    <div className={`alert ${error ? "error-msg" : ""}`}>
      <span
        className="closebtn"
        onClick={(this.parentElement.style.display = "none")}
      >
        &times;
      </span>
      <strong>Error!</strong>
      {msg}!.
    </div>
  );
};

export default Alert;
