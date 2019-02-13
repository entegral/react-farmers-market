import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Produce from './Produce';
import MarketList from './MarketList';

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
          component={ MarketList }/>
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
