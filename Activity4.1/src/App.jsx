import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Add from "./components/Add";
import Subtratct from "./components/Subtratct";
import Multiply from "./components/Multiply";
import Divide from "./components/Divide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Add></Add>
      <Subtratct></Subtratct>
      <Multiply></Multiply>
      <Divide></Divide>
    </>
  );
}

export default App;
