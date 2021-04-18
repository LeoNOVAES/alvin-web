import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Auth from "./componentes/auth/Auth";
import Dashboard from "./componentes/dashboard/Dashboard";

// import 'bootstrap/dist/css/bootstrap.min.css';

function PrivateRoute({ children, ...props }) {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...props}
      render={({ location }) =>
        token ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Auth />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
