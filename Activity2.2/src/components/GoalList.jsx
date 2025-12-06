import React from "react";
import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";
import GoalItem from "./GoalItem";

function GoalList({ goal }) {
  return (
    <>
      <ul>
        <GoalItem goal="Drink water">Water helps with hydration</GoalItem>
        <GoalItem goal="Run 10,000 steps">Running keeps you fit</GoalItem>
        <GoalItem goal="Sleep for 8 hours">Makes you well-rested</GoalItem>
      </ul>
    </>
  );
}

export default GoalList;
