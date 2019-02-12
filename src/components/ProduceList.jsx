import React from 'react';
//import Produce from './Produce';
import PropTypes from 'prop-types';


function ProduceList ({month, items}) {

  return (
    <div>
      <h4>{month}</h4>
      {items.map((item, index) =>
        <div key={index}>
          <h5>key={index} name={item}</h5>
        </div>
      )}
    </div>
  );
}

ProduceList.propTypes = {
  month: PropTypes.string,
  items: PropTypes.array
};

export default ProduceList;
