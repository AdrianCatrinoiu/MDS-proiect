import React from "react";
import Dieta from "../dieta/Dieta";
import "../diete/Diete.css";

export default class Diete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listDiete = this.props.diete.map((dieta) => (
      // Correct! Key should be specified inside the array.
      <Dieta
        nume={dieta.type}
        value={dieta.ammount}
        ingredienteList={dieta.ingredients}
        pregatire={dieta.preparation}
        poza={dieta.picture}
      />
    ));
    return <ul>{listDiete}</ul>;
  }
}

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <Diete numbers={numbers} />,
//   document.getElementById("root")
// );

