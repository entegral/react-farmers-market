import React from 'react';
import PropTypes from 'prop-types';

function MarketItem ({ day, location, hours, booth }){

  return (
    <ul>
      <li> {day} </li>
      <li> {location} </li>
      <li> {hours} </li>
      <li> {booth} </li>
    </ul>
  );
}

MarketItem.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketItem;
