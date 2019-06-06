import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContext } from './App.context';
import { Routes } from 'constants.js';
import Login from 'pages/login/Login';
import Dashboard from 'pages/dashboard/Dashboard';
import Profile from 'pages/profile/Profile';
import { auth } from 'firebase/Firebase';

class App extends React.Component {
  state = {
    authenticated: false,
    user: null,
    unsubscribe: () => {},
    loading: true
  };

  componentDidMount() {
    // Start listening to auth changes
    // This will return the user object if the user is already logged in
    const unsubscribe = auth.onAuthStateChanged(user => {
      let authenticated;
      if (!user) {
        authenticated = false;
      } else {
        user = auth.currentUser;
        authenticated = true;
      }
      this.setState({ authenticated, user, loading: false });
    });
    this.setState({ unsubscribe });
  }

  render() {
    const { authenticated, user, loading } = this.state;

    return loading ? (
      'Loading...'
    ) : (
      <AppContext.Provider
        value={{
          setAuthenticated: authenticated => this.setState({ authenticated }),
          user
        }}
      >
        <Router>
          {authenticated ? (
            <>
              <Route exact path={Routes.DASHBOARD} component={Dashboard} />
              <Route exact path={Routes.Profile} component={Profile} />
            </>
          ) : (
            <Login />
          )}
          <Route />
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
