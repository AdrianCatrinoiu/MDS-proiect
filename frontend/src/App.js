import React from "react";
import Register from "./components/Register/Register";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Preferences from "./components/Preferences/Preferences";
import Dashboard from "./components/Dashboard/Dashboard";
import useToken from "./components/App/useToken";

function App() {
  const { token, setToken } = useToken();
  console.log(localStorage.getItem("token"));
  console.log(token);
  if (!token) {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
          </Switch>
          <nav className="app-wrapper">
            <p>Nu aveti cont inca?</p>
            <Link to="/register">Register</Link>
            <br></br>
            <p>Daca deja aveti un cont</p>
            <Link to="/login">Login</Link>
          </nav>
        </BrowserRouter>
      </div>
    );
  }
  if (token.status === "OK") {
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  if (token.status === "ERROR") {
    if (token.message === "Login Error") {
      return (
        <div className="wrapper">
          <BrowserRouter>
            <Switch>
              <Route path="/register">
                <Register setToken={setToken} />
              </Route>
              <Route path="/login">
                <p className="app-wrapper">Datele de login sunt incorecte</p>
                <Login setToken={setToken} />
              </Route>
            </Switch>
            <nav className="app-wrapper">
              <p>Nu aveti cont inca?</p>
              <Link to="/register">Register</Link>
              <br></br>
              <p>Daca deja aveti un cont</p>
              <Link to="/login">Login</Link>
            </nav>
          </BrowserRouter>
        </div>
      );
    }
    if (token.message === "Password incorrect RegExp") {
      return (
        <div className="wrapper">
          <BrowserRouter>
            <Switch>
              <Route path="/register">
                <p className="app-wrapper">Parola nu respecta formatul:</p>
                <br />
                <ul className="app-wrapper">
                  <li>Parola trebuie sa contina litere mici si mari</li>
                  <li>Parola trebuie sa contina cifre</li>
                  <li>Parola trebuie sa contina caractere (!@#$%^&*.)</li>
                </ul>
                <Register setToken={setToken} />
              </Route>
              <Route path="/login">
                <Login setToken={setToken} />
              </Route>
            </Switch>
            <nav className="app-wrapper">
              <p>Nu aveti cont inca?</p>
              <Link to="/register">Register</Link>
              <br></br>
              <p>Daca deja aveti un cont</p>
              <Link to="/login">Login</Link>
            </nav>
          </BrowserRouter>
        </div>
      );
    }
  } else {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
          </Switch>
          <nav className="app-wrapper">
            <p>Nu aveti cont inca?</p>
            <Link to="/register">Register</Link>
            <br></br>
            <p>Daca deja aveti un cont</p>
            <Link to="/login">Login</Link>
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
