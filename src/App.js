import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header2 from "./header/Header2";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header2 />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
