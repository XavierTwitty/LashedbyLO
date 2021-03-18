import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Training from "./components/Training";
import Contact from "./components/Contact";
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
              <Link to="Services"> Services </Link>
            </li>
            <li>
              <Link to="Training"> Training </Link>
            </li>
            <li>
              <Link to="Contact"> Contact </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Training" component={Training} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
