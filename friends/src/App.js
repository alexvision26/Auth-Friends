import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Login Form</h1>
      <Login />
    </div>
  );
}

export default App;
