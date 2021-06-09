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
    <div>
      <p>Ingredient:{ingredient.nume}</p>
      <p>Quantity:{ingredient.gramaj}</p>
    </div>
  ));
  return (
    <div className="DesignDieta">
      <li>
        <br></br>
        <p id="id1">{nume}</p>
        <p id="id3">Calories: {value}</p>
        <p id="id2">Preparation:</p>
        <p>{pregatire}</p>
        <p id="id4">Enjoy!</p>
        <p>{poza}</p>
        <ul>{ingrediente}</ul>
      </li>
      <hr></hr>
    </div>
  );
}
