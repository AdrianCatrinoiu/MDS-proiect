import React, { useState, useEffect } from "react";
import { workout } from "../workout/workout";
import { TextField, MenuItem } from "@material-ui/core";
import WorkoutTable from "../WorkoutPlanner/workoutplanner";

function BmiDropdown({ day }) {
  const [bmiRange, setBmiRange] = useState("");
  const [bmiName, setBmiName] = useState("");

  const changeBmi = (e) => setBmiRange(e.target.value);

  const getBmiName = () => {
    const currentBmi = workout.BmiPlanner.filter((bmi) => {
      return bmi.range === bmiRange;
    });

    if (currentBmi[0]) {
      setBmiName(currentBmi[0].name);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getBmiName(), [bmiRange]);

  return (
    <>
      <div>
        <WorkoutTable day={day} bmiRange={bmiRange} bmiName={bmiName} />
      </div>
    </>
  );
}

export default BmiDropdown;
