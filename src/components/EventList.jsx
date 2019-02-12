import React from 'react';
import Event from './Event';
import data from './mockData.js';

function EventList(){
  

  const componentStyle = {
    border: '1px dotted green',
    color: '#80f'
  };
  

  return (
    <div style={componentStyle}>
      <h3>Upcoming Events</h3>
      {data['marketSchedule'].map((info, index) =>
        <Event
          key={index}
          location={info.location} />
      )}
      
      <Event/>
    
    </div>
  );
}

export default EventList;
