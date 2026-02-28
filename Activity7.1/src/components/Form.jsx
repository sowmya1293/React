import { useRef } from "react";

function Form() {
  const inputField = useRef();
  const selectField = useRef();
  let name;
  let program;

  function formSubmitHandler(event) {
    name = inputField.current.value;
    program = selectField.current.value;
    console.log("Entered Name: ", name);
    console.log("Entered program: ", program);
    event.preventDefault();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={inputField} />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={selectField}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button onClick={formSubmitHandler}>Submit</button>
    </form>
  );
}

export default Form;
