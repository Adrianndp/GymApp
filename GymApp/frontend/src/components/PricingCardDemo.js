import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Divider, CardHeader } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: '1px',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const PricingCardDemo = React.memo(function PricingCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={props.plan} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          $ 19.99
        </Typography>
        <div className={classes.list}>
          <Typography align="center">Manage tasks</Typography>
          <Typography align="center">Sync notes</Typography>
          <Typography align="center">Set deadline</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" className={classes.button}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
});

export default PricingCardDemo