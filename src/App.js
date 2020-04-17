import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"> REACT CURD example</Link>
            <div className="collapse navbar=collapse" id="navbarSupportedContent" ></div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-Link">Home &nbsp; </Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-Link">Create &nbsp;</Link>
              </li>
              <li className="nav-item">
                <Link to={'/edit'} className="nav-Link">Edit &nbsp; </Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-Link">Index &nbsp;</Link>
              </li>
            </ul>
          </nav>
          <h2>Welcome to English Quick Pack</h2>
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route exact path='/edit' component={Edit} />
            <Route exact path='/index' component={Index} />
          </Switch>

        </div>
      </Router>
    );
  }

}

export default App;
