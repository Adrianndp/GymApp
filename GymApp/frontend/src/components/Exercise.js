import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Exercise(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardActionArea href={`api/exercises/${props.name}`}>
        <CardMedia
          component="img"
          height="140"
          image="static/images/deadlift.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


