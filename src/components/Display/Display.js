import React from "react";
import "./Display.css";

export default function Display({ valor, res, error }) {
  const fontSize = error ? "24px" : "60px";
  const displayClass = error ? "display-res-error" : "display-res";

  return (
    <div className="display">
      <span className="display-op">{valor}</span>
      <span className={displayClass} style={{ fontSize }}>
        {res}
      </span>
    </div>
  );
}
