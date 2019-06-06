import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from 'pages/login/Login';
import { Routes } from 'constants.js';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      {authenticated ? (
        Object.values(Routes).map(route => <Route exact path={route} />)
      ) : (
        <Login />
      )}
      <Route />
    </Router>
  );
}

export default App;
