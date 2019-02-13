import React from 'react';
import PropTypes from 'prop-types';

function ProduceItem ({ item }){

  return (
    <span> {item} </span>
  );
}

ProduceItem.propTypes = {
  item: PropTypes.string
};

export default ProduceItem;
