import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

import Body from './Components/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Body} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
