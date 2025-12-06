import React from "react";

function GoalItem({ goal, children }) {
  return (
    <>
      <li>
        <h2>{goal}</h2>
        <p>{children}</p>
      </li>
    </>
  );
}

export default GoalItem;
