import React from 'react';
import ProduceList from './ProduceList';
import data from './mockData.js';

function ProduceSelector () {
  const month = 0;
  const divStyle = {
    border: '1px dotted #0ff'
  };

  return (
    <div style={divStyle}>
      <ProduceList 
        month={data['availableProduce'][month]['month']}
        items={data['availableProduce'][month]['selection']} />
      <div>Produce Selector Here</div>
    </div>
  );
}

export default ProduceSelector;


  
