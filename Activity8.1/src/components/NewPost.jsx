import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [saveButton, setSaveButton] = useState(false);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    //event.preventDefault();
    setSaveButton(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ key1: enteredTitle }),
    }).then((response) => {
      console.log(response.json);
      setSaveButton(false);
    });
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button onClick={submitHandler}>{saveButton ? "Saving" : "Save"}</button>
    </form>
  );
}

export default NewPost;
