import React from 'react';
import PropTypes from 'prop-types';

function Event({location}){
  const divStyle = {
    color: '#08f'
  };

  return (
    <div style={divStyle}>
      <div>{location}</div>
    </div>
  );
}

Event.propTypes = {
  location: PropTypes.string.isRequired
};

export default Event;
