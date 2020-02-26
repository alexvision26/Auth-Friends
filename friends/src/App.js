import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className='navbar'>
        <h1>Friends<span className='logo-app'>App</span></h1>
        <div className='links'>
          <p><Link to='/api/login'>Login</Link></p>
          <p><Link to='/api/friends'>Friends</Link></p>
        </div>
      </nav>
      <Switch>
        <PrivateRoute exact path ='/api/friends' component={FriendsList}/>
        <Route path='/api/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      {/* <footer className='navbar'><h2>Friends<span className='logo-app'>App</span></h2></footer> */}
    </div>
    
    </Router>
  );
}

export default App;
