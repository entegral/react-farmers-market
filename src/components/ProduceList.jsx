import React from 'react';
import ProduceItem from './ProduceItem';
import PropTypes from 'prop-types';

function ProduceList ( { month, selection } ){

  const componentStyle = {
    marginTop: 25
  };

  return (
    <div style= {componentStyle}>
      <h3> {month} </h3>
      <ul>
        <li>
          {selection.map((item, index) =>
            <ProduceItem
              item = {item}
              key = {index}
            />
          )}
        </li>

      </ul>
    </div>
  );
}

ProduceList.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
  item: PropTypes.string
};


export default ProduceList;
