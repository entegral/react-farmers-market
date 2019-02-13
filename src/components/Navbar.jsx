import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';



function Navbar () {

  const iconStyle = {
    position: 'absolute',
    right: 20,
  };

  const appBarStyle = {
    display: 'block'
  };

  return (
    <AppBar style={ appBarStyle } color='default'>
      <Toolbar>
        <Typography variant='h4'>
          Avery's Organics
        </Typography>
        <div style={ iconStyle }>
          <Link to='/'><IconButton color='inherit'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/><path fill="none" d="M0 0h24v24H0z"/></svg></IconButton></Link>
          <Link to='/produce'><IconButton color='inherit'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/><path d='M0 0h24v24H0z' fill='none'/></svg>            </IconButton>
          </Link>
        </div>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
