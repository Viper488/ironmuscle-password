import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Password from "./Password";
import End from "./End";
import Email from "./Email";
class App extends React.Component{
  render() {
    return (
        <Router>
            <Switch>
              <Route path="/pass/:id" component={Password} />
              <Route path="/pass" component={End} />
              <Route path="/email/:id" component={Email} />
            </Switch>
        </Router>
    );
  }
}

export default App;
