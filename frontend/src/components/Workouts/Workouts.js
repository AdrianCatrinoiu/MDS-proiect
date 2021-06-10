import { React, useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import BmiDropdown from "./../Dropdown/bmidropdown";

export default function Workouts() {
  const [day, setDay] = useState("");

  // Alegem ziua
  const changeDay = (e) => setDay(e.target.value);

  return (
    <div className="App">
      <h1>BMI Planner</h1>

      {/* Facem menu pentru alegerea workout-ului */}

      <div style={{ margin: 10 }}>
        <TextField
          select
          onChange={changeDay}
          value={day}
          helperText="Ce zi alegi?"
        >
          <MenuItem onChange={changeDay} value="Lower Body">
            Lower Body
          </MenuItem>
          <MenuItem onChange={changeDay} value="Upper Body">
            Upper Body
          </MenuItem>
        </TextField>
      </div>

      <BmiDropdown day={day} />
    </div>
  );
}
