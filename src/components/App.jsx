import React from 'react';
import Header from './Header';
import EventList from './EventList';
import ProduceSelector from './ProduceSelector';  

function App() {
  const componentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  };
  
  return (
    <div>
      <Header/> 
      <div style={componentStyle}>
        <EventList/>
        <ProduceSelector/>
      </div>
    </div>
  );
}

/*
      */
export default App;
