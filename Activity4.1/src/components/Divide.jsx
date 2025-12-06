import React, { useState } from "react";

function Divide() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  function changeFirstValue(event) {
    setFirstValue(+event.target.value);
  }
  function changeSecondValue(event) {
    setSecondValue(+event.target.value);
  }

  const sumOf = firstValue / secondValue;

  return (
    <>
      <input type="number" onChange={changeFirstValue} />
      /
      <input type="number" onChange={changeSecondValue} />={sumOf}
    </>
  );
}

export default Divide;
