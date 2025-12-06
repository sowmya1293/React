import React, { useState } from "react";
import FirstChildApp from "./components/FirstChildApp";
import SecondChildApp from "./components/SecondChildApp";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");
  let result = 0;

  function firstValueFunc(event) {
    setFirstValue(+event.target.value);
  }

  function secondValueFunc(event) {
    setSecondValue(+event.target.value);
  }

  function operatorFunc(event) {
    console.log(event.target.value);
    setOperator(event.target.value);
  }

  if (operator == "add") {
    result = firstValue + secondValue;
  } else if (operator == "subtract") {
    result = firstValue - secondValue;
  } else if (operator == "multiply") {
    result = firstValue * secondValue;
  } else if (operator == "divide") {
    result = firstValue / secondValue;
  }

  return (
    <div>
      <FirstChildApp
        firstFunction={firstValueFunc}
        secondFunction={secondValueFunc}
        operatorFunction={operatorFunc}
      ></FirstChildApp>
      <SecondChildApp finalResult={result}></SecondChildApp>
    </div>
  );
}

export default App;
