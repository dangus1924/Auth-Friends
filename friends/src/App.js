import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Login from './component/Login'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" />
      </Switch>
    </div>
  );
}

export default withRouter(App)
