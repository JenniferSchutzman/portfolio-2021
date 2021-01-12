import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    flexGrow: 1,
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  // title: {
  //   fontSize: 14,
  // },
  image: {
    width: "100%"
  },
  pos: {
    marginBottom: 12,
  },
}));


const PageLayout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card >
        <img src={props.data.img} alt={props.data.img} className={classes.image}/>
        <CardContent>
          <p>{props.data.p1}</p>
          <p>{props.data.p2}</p>
          <p>{props.data.p3}</p>
        </CardContent>
    </Card>
    </div>
  )
}

export default PageLayout;