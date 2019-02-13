import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Produce from './Produce';
import Schedule from './Schedule';

function App() {

  const NavbarStyle = {
    overflow: 'hidden'
  };

  return (
    <div>
      <Navbar style={NavbarStyle}/>
      <Switch>
        <Route
          exact path='/'
          component={ Schedule }/>
        <Route
          exact path='/produce'
          component={ Produce }/>
      </Switch>
    </div>
  );
}

/*
      */
export default App;
