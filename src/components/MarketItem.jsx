import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function MarketItem ({ day, location, hours, booth }){

  const cardStyle = {
    margin: '10px 10px 10px 10px',

  };

  return (

    <Card style={cardStyle}>
      <CardContent>
        <Typography component='p'>
          {day}
        </Typography>
        <Typography component='p'>
          {location}
        </Typography>
        <Typography component='p'>
          {hours}
        </Typography>
        <Typography component='p'>
          Booth: {booth}
        </Typography>
      </CardContent>
    </Card>

  );
}

MarketItem.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketItem;
