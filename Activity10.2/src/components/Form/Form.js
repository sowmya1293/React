import { useReducer, useState } from "react";
import classes from "./Form.module.css";

const initialState = {
  username: null,
  password: null,
  emailValidity: false,
  passwordValidity: false,
};

function reducerFunction(state, action) {
  if (action.type === "updateName") {
    return {
      ...state,
      username: action.payload,
      emailValidity: action.payload.includes("@") ? true : false,
    };
  }
  if (action.type === "updatePassword") {
    return {
      ...state,
      password: action.payload,
      passwordValidity: action.payload.trim().length > 7 ? true : false,
    };
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const formIsValid = state.emailValidity && state.passwordValidity;

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert("Invalid form inputs!");
      return;
    }
  }
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          onChange={(event) =>
            dispatch({ type: "updateName", payload: event.target.value })
          }
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) =>
            dispatch({ type: "updatePassword", payload: event.target.value })
          }
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
