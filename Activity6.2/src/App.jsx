import { useState } from "react";
import classes from "./App.module.css";
import "./App.css";

function App() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [cssInput, setCssInput] = useState("");
  const [cssLabel, setCssLabel] = useState("");

  function checkEmail(event) {
    setEmailId(event.target.value);
  }

  function checkPassword(event) {
    setPassword(event.target.value);
  }

  function checkValidity() {
    if (
      !emailId.includes("@") ||
      !emailId.includes(".com") ||
      password.length < 8
    ) {
      setCssInput(classes.error - input);
      setCssLabel(classes.error - label);
    } else {
      setCssInput("");
      setCssLabel("");
    }
    event.preventDefault();
  }

  return (
    <>
      <form className="email-form">
        <div className="email-div input-div">
          <label htmlFor="email" className={cssLabel}>
            Your email
          </label>
          <input
            type="text"
            id="email"
            className={cssInput}
            onChange={checkEmail}
          />
        </div>
        <div className="password-div input-div">
          <label htmlFor="password" className={cssLabel}>
            Your password
          </label>
          <input
            type="password"
            id="password"
            className={cssInput}
            onChange={checkPassword}
          />
        </div>
        <button type="submit" onClick={checkValidity}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
