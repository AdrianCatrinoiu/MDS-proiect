import React from "react";
import "../dieta/Dieta.css";

export default class Diete extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const ingrediente = this.props.ingredienteList.map((ingredient) => (
            // Correct! Key should be specified inside the array.
            <div>
              <p>Ingredient:{ingredient.nume}</p>
              <p>Quantity:{ingredient.gramaj}</p>
            </div>
          ));
          // Correct! There is no need to specify the key here:
          return (
            <div className = "DesignDieta">
              <li>
                <br></br>
                <p id = "id1">{this.props.nume}</p>
                <p id = "id3">Calories: {this.props.value}</p>
                <p id = "id2">Preparation:</p>
                <p>{this.props.pregatire}</p>
                <p id = "id4">Enjoy!</p>
                <p>{this.props.poza}</p>
                <ul>{ingrediente}</ul>
              </li>
              <hr></hr>
            </div>
          );

    }
}
