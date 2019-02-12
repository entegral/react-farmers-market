import React from 'react';
import Produce from './Produce';
import PropTypes from 'prop-types';


function ProduceList ({month, items}) {
  const h4Style = {
    margin: '0.2em 0',
    color: '#555'
  };

  return (
    <div>
      <h4 style={h4Style}>{month}</h4>
      {items.map((name, index) =>
        <Produce
          key={index}
          name={name} />
      )}
    </div>
  );
}

ProduceList.propTypes = {
  month: PropTypes.string,
  items: PropTypes.array
};

export default ProduceList;
