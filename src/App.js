import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Demo from "./components/pages/Demo";
import Home from "./components/pages/Home";
import KeyFeature from "./components/pages/KeyFeature";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/demo" component={Demo}/>
          <Route path="/keyFeature" component={KeyFeature}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
