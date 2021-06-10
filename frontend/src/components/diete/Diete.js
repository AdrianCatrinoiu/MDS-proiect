import React from "react";
import Dieta from "../dieta/Dieta";
import "../diete/Diete.css";

export default function Diete({ diete }) {
  const listDiete = diete.map((dieta) => (
    <Dieta
      nume={dieta.type}
      value={dieta.ammount}
      ingredienteList={dieta.ingredients}
      pregatire={dieta.preparation}
      poza={dieta.picture}
    />
  ));
  return <div>{listDiete}</div>;
}
