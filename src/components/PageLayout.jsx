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
  description: {
    backgroundColor: '#00ff00'
  },
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
      <Card className={classes.root} >
        <img src={props.data.img} alt={props.data.img} className={classes.image}/>
        <CardContent>
          <p>{props.data.p1}</p>
          <p>{props.data.p2}</p>
          <p>{props.data.p3}</p>
        </CardContent>
        <CardContent>
          <Grid container>
            {props.data.gridSection.map(x=> {
              return (
                <>
                <Grid item xs={12} sm={3}>
                  <img src={x.gridImage} alt={x.gridHeader}/>
                  </Grid>
                <Grid item xs={12} sm={9}>
                  <h2>{x.gridHeader}</h2>
                  <h5>{x.gridSubHeader}</h5>
                  <p>{x.gridDescription.map(bulletPoint => {
                    return (
                      <p>{bulletPoint}</p>)
                    })}
                    </p>
                  </Grid>
                  </>
                )})}
            {/* {props.data.gridSection.map( item => {
              return (
                <>
                <Grid item xs={12} sm={3}>
                <img src={item.gridImage} alt={item.gridImage} className={classes.gridImage} />
                </Grid>
                <Grid item xs={12} sm={9}>
                  <h5>{item.gridHeader}</h5>
                  <p className={classes.decription}>{item.gridDescription.map(index => {
                    return (index)
                  })}</p>
                  </Grid>
                  </>
              )
            })} */}
           </Grid>
        </CardContent> 
    </Card>
  )
}

export default PageLayout;