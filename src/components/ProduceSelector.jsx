import React from 'react';
import ProduceList from './ProduceList';
import data from './mockData.js';

function ProduceSelector () {
  const month = 0;

  return (
    <div>
      Selector
      <ProduceList 
        month={data['availableProduce'][month]['month']}
        items={data['availableProduce'][month]['selection']} />
    </div>
  );
}

export default ProduceSelector;


  
