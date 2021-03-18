import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo"> logo to the left </div>
          <ul className="nav">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="services"> Services </Link>
            </li>
            <li>
              <Link to="training"> Training </Link>
            </li>
            <li>
              <Link to="contact"> Contact </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route>
            <Home exact path="/" />
          </Route>
          <Route path="services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
