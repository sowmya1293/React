import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [emailAddress, setEmailAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function inputEmail(event) {
    setEmailAddress(event.target.value);
  }

  function checkEmail() {
    setErrorMessage(emailAddress.indexOf("@") == -1 ? "Invalid email" : null);
    console.log(errorMessage);
  }

  return (
    <>
      <label id="email">Your email</label>
      <input type="text" htmlFor="email" onChange={inputEmail} />
      <button type="submit" onClick={checkEmail}>
        Submit
      </button>
      <p>{errorMessage}</p>
    </>
  );
}

export default App;
