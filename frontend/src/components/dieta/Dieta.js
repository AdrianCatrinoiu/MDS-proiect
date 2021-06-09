import React from "react";
import "../dieta/Dieta.css";

export default function Dieta({
  nume,
  value,
  ingredienteList,
  pregatire,
  poza,
}) {
  const ingrediente = ingredienteList.map((ingredient) => (
      <p>{ingredient.nume} : {ingredient.gramaj} (quantity)</p>
  ));
  return (
    <div className="DesignDieta">
        <h1 className="id1">{nume}</h1>
        <h2 >Calories: {value}</h2>
        <hr/>
        <div className = "editDieta">
          <div className  = "zonaPozaDieta" >
              <div></div>
              <div>
                  {poza}
              </div>
              <div></div>
          </div>
          <div style = {{width  : "40%"}}>
            <p >Preparation:</p>
            <p>{pregatire}</p>
            <p >Ingredients: </p>
            <ul>{ingrediente}</ul>
          </div>
      </div>
    </div>
  );
}
