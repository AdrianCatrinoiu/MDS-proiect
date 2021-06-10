import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Diete from "./../diete/Diete";
import IMC from "./../IMC/IMC";
import Workouts from "./../Workouts/Workouts"
import "./NavBar.css";
import Home from './../Home/Home';

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
            <Link to="/diets" className="linkBtn">
              Diets
            </Link>
          </div>
          <div>
            <Link to="/workouts" className="linkBtn">
              Workouts
            </Link>
          </div>
        </nav>
        <hr></hr>

        <Switch>
          <Route path="/diets">
            <Diete diete={diete2} />
          </Route>
          <Route path="/workouts">
            <Workouts />
          </Route>
          <Route path="/imc">
            <IMC />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
