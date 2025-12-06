import React from "react";

function FirstChildApp({ firstFunction, secondFunction, operatorFunction }) {
  return (
    <div>
      <input type="number" onChange={firstFunction} />
      <select onChange={operatorFunction}>
        <option value=""></option>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" onChange={secondFunction} />
    </div>
  );
}

export default FirstChildApp;
