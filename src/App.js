import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
class App extends React.Component{
  render() {
    return (
        <Router>
            <Switch>
              <Route path="/:id" component={Home} />
            </Switch>
        </Router>
    );
  }
}

export default App;
