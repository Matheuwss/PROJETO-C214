import React from "react";
import "./Display.css";

export default function Display({ valor, res }) {
  return (
    <div className="display">
      <span className="display-op">{valor}</span>
      <span className="display-res">{res}</span>
    </div>
  );
}
