import React from "react";
import Register from "./components/Register/Register";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import useToken from "./components/App/useToken";
import poza1 from "./components/dieta1.jpg";
import poza2 from "./components/dieta2.jpg";
import poza3 from "./components/dieta3.jpg";
import poza4 from "./components/dieta4.jpg";
import poza5 from "./components/dieta5.jpg";

const diete2 = [
  {
    type: "Chicken & Veggie Stir-Fry",
    ammount: 100,
    ingredients: [
      {
        nume: " chicken breast",
        gramaj: 200,
      },
      {
        nume: " broccoli florets",
        gramaj: 200,
      },
      {
        nume: " mushroom",
        gramaj: 100,
      },
    ],
    preparation:
      " In a large pan on medium-high heat, add 1 tablespoon of oil. Once the oil is hot, add chicken, season with salt and pepper, and sauté until cooked through and browned. Remove cooked chicken from pan and set aside. 2.In the same pan, heat 1 tablespoon of oil and add mushrooms. When the mushrooms start to soften, add broccoli florets and stir-fry until the broccoli is tender. Remove cooked mushrooms and broccoli from the pan and set aside. Add 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant. Add the remaining sauce ingredients and stir until smooth. Return the chicken and vegetables to the saucy pan, stir until heated through. Serve with hot rice or noodles.",
    picture: <img src={poza1} alt="Dieta 1" />,
  },
  {
    type: "Banana Pancakes",
    ammount: 40,
    ingredients: [
      {
        nume: " ripe bananas",
        gramaj: 2,
      },
      {
        nume: " eggs",
        gramaj: 2,
      },
      {
        nume: " teaspoon vanilla extract",
        gramaj: 1,
      },
      {
        nume: " teaspoon vanilla extract",
        gramaj: 1,
      },
      {
        nume: " quick-cook oats",
        gramaj: 70,
      },
      {
        nume: " teaspoon cinnamon",
        gramaj: 1,
      },
    ],
    preparation:
      "Mash bananas in a large bowl until smooth. Mix in eggs and vanilla until well combined, then mix in oats and cinnamon. Heat a skillet to medium and add in a scoop* of the pancake batter. Smooth out to form an even layer. Cook for about 2-3 minutes until you start to see bubbles releasing from the top of the batter. Flip and cook until the other side is golden brown, about 1-2 minutes. Garnish your pancakes with your favorite toppings! We used banana slices, chopped walnuts & maple syrup.",
    picture: <img src={poza2} alt="Dieta 2" />,
  },
  {
    type: "2-ingredient Pasta",
    ammount: 50,
    ingredients: [
      {
        nume: " shredded mozzarella cheese",
        gramaj: 100,
      },
      {
        nume: " egg yolk",
        gramaj: 1,
      },
    ],
    preparation:
      "Add the mozzarella to a bowl and microwave for 1-2 minutes, until melted. Allow the mozzarella to cool for 30 seconds. With a spatula, gently fold the egg yolk into the cheese. Turn the mixture out onto a parchment paper-lined baking sheet. Place another piece of parchment paper on top of the dough and press down with your hand until thin. Remove the top piece of parchment and cut the dough into thin strips. Place the “pasta” on a rack and refrigerate for four hours or overnight. Place the “pasta” in boiling water for one minute. Drain into a colander and run cool water over the pasta to prevent sticking. Serve with your favorite sauce and toppings.",
    picture: <img src={poza3} alt="Dieta 3" />,
  },
  {
    type: "Healthy Carrot Cake Muffins",
    ammount: 50,
    ingredients: [
      {
        nume: " eggs",
        gramaj: 2,
      },
      {
        nume: " cup greek yogurt",
        gramaj: 1,
      },
      {
        nume: " cup maple syrup",
        gramaj: 1,
      },
      {
        nume: " teaspoon vanilla extract",
        gramaj: 1,
      },
      {
        nume: " carrots",
        gramaj: 2,
      },
      {
        nume: " cups whole wheat flour",
        gramaj: 2,
      },
      {
        nume: " teaspoons baking powder",
        gramaj: 2,
      },
      {
        nume: " teaspoons ground cinnamon",
        gramaj: 1.5,
      },
    ],
    preparation:
      " Preheat oven to 350°F (175°C). In a large bowl, whisk the eggs until light and fluffy. Add in the Greek yogurt and whisk again until the mixture is smooth and fluffy. Pour in the maple syrup, milk, and vanilla extract. Beat the mixture again until smooth. Add the shredded carrots, whole wheat flour, baking powder, and cinnamon over the wet ingredients. Using a rubber spatula, fold the wet and dry ingredients together just until combined. Using a medium ice cream scoop, portion the batter into a greased 12-cup muffin tin. Bake for 20 minutes, until the muffins have risen and set. For the frosting, beat the cream cheese in a small bowl until smooth. Add in the maple syrup and vanilla and beat again until the mixture is well combined. Once the muffins have cooled, use a small ice cream scoop to spoon a bit of the frosting on top of the muffins. Gently tap the muffins on the counter to smooth out the layer of frosting on top. ",
    picture: <img src={poza4} alt="Dieta 4" />,
  },
  {
    type: "Easy & Healthy Fried Rice",
    ammount: 200,
    ingredients: [
      {
        nume: " tablespoons sesame oil",
        gramaj: 2,
      },
      {
        nume: " cloves garlic, minced",
        gramaj: 3,
      },
      {
        nume: " chicken breasts, diced salt to taste, pepper to taste",
        gramaj: 2,
      },
      {
        nume: " cup carrot",
        gramaj: 1,
      },
      {
        nume: " cup broccoli floret",
        gramaj: 1,
      },
      {
        nume: " cup broccoli floret",
        gramaj: 1,
      },
      {
        nume: " cups brown rice",
        gramaj: 1.5,
      },
      {
        nume: " cup frozen peas",
        gramaj: 0.5,
      },
      {
        nume: " tablespoons low sodium ",
        gramaj: 3,
      },
    ],
    preparation:
      "Heat sesame oil in a skillet, and cook garlic until softened. Add the chicken, salt, and pepper, and sauté for 5 minutes. Add the carrots and broccoli, and sauté until tender. Add the rice, soy sauce, and peas, and mix thoroughly.",
    picture: <img src={poza5} alt="Dieta 5" />,
  },
];

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
        <NavBar diete2={diete2}></NavBar>
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
                  <li>Parola trebuie sa contina caractere (!@#$%^*.)</li>
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
