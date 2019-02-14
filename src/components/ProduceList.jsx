import React from 'react';
import ProduceItem from './ProduceItem';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ProduceList ( { month, selection } ){

  const componentStyle = {
    margin: '10px 10px 10px 10px',
    width: '200px'
  };

  return (
    <Card style= {componentStyle}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {month}
        </Typography>
        {selection.map((item, index) =>
          <ProduceItem
            item = {item}
            key = {index}
          />
        )}
      </CardContent>
    </Card>
  );
}

ProduceList.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
  item: PropTypes.string
};


export default ProduceList;
