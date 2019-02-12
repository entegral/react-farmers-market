import React from 'react';

function Header () {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1em',
    border: '1px dotted #ff8800',
    color: '#505050'
  };

  const h1Style = {
    margin: '0 1em'
  };

  const spanStyle = {
    margin: '0 1em'
  };

  return (
    <div style={divStyle}>
      <div><h1 style={h1Style}>Avery's Organics</h1></div>
      <div>
        <span style={spanStyle}>Home</span>
        <span style={spanStyle}>About</span>
        <span style={spanStyle}>Contact</span>
      </div>
    </div>
  );
}

export default Header;
