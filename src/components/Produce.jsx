import React from 'react';
import PropTypes from 'prop-types';

function Produce({name}){
  const divStyle = {
    marginLeft: '0.5em',
    color: '#0f8'
  };

  return (
    <div style={divStyle}>
      <div>{name}</div>
    </div>
  );
}

Produce.propTypes = {
  name: PropTypes.string.isRequired
};

export default Produce;
