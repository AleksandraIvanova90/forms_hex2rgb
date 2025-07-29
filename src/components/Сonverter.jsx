import React from "react";
import "../App.css";
import hexToRgb from "hex-to-rgb";

const Converter = ({ valid, error, form, handleChange }) => {
  return (
    <>
      <input
        className="input"
        name="backgroundColor"
        value={form}
        onChange={handleChange}
      />
      <div className="output">{valid ? `rgb (${hexToRgb(valid)})` : error}</div>
    </>
  );
};

export default Converter;