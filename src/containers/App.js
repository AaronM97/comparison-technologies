import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Electricity from './Electricity'

export default class App extends Component {
  render() {
    return (
      <Router>
        <h1>Energy Helpline</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/elec">Electricity</Link>
            </li>
            {/* <li>
              <Link to="/gas">Gas</Link>
            </li> */}

          </ul>
        </nav>

        <Switch>
          <Route path="/elec">
            <Electricity />
          </Route>
          {/* <Route path="/gas">
            <Gas />
          </Route> */}
          <Route path="/">
            <p>Homepage</p>
            <p>Click a link above to compare energy providers</p>
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
