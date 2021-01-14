import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    flexGrow: 1,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: "100%",
  },
  description: {
    backgroundColor: '#00ff00'
  },
  image: {
    width: "100%",
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
          <Grid container spacing={5} >
            {props.data.gridSection.map(x=> {
              return (
                <>
                <Grid item xs={12} sm={3} center>
                  <img className={classes.image} src={x.gridImage} alt={x.gridHeader}/>
                  </Grid>
                <Grid item xs={12} sm={9}>
                  <h2>{x.gridHeader}</h2>
                  <h5>{x.gridSubHeader}</h5>
                  <p>{x.gridDescription.map(bulletPoint => {
                    return (
                      <p>{bulletPoint}</p>)
                    })}
                    </p>
                    <div className={classes.button}>
                    <a href={x.gridButtonOneLink} target={"_blank"} rel="noreferrer" style={{textDecoration: 'none'}}>
                       <Button variant="contained" color="primary" >
                         {x.gridButtonOneText}
                       </Button>
                    </a>
                    {x.gridButtonTwoLink && (
                      <a href={x.gridButtonTwoLink} target={"_blank"} rel="noreferrer" style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="primary">{x.gridButtonTwoText}</Button>
                      </a>
                   )}
                  </div>
                  </Grid>
                  </>
                )})}
           </Grid>
        </CardContent> 
    </Card>
  )
}

export default PageLayout;