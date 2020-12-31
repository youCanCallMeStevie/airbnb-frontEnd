import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
