import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Diete from "./../diete/Diete";
import IMC from "./../IMC/IMC";
import "./NavBar.css";
export default function NavBar({ diete2 }) {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <div>
            <Link to="/" className="linkBtn">
              Home
            </Link>
          </div>
          <div>
            <Link to="/imc" className="linkBtn">
              Calculator IMC
            </Link>
          </div>
          <div>
            <Link to="/diete" className="linkBtn">
              Diets
            </Link>
          </div>
        </nav>
        <hr></hr>

        <Switch>
          <Route path="/diete">
            <Diete diete={diete2} />
          </Route>
          <Route path="/imc">
            <IMC />
          </Route>
          <Route path="/">
            <div>
              <p>Homepage</p>
              <p>Insert cool animation here</p>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
