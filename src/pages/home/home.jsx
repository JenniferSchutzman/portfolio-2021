import React from 'react';
// import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import ButtonBase from '@material-ui/core/ButtonBase';
// import { ButtonBase, Grid, Typography} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import useStyles from './home.styles.js'
import homeData from './home.data.js'

import NavBar from '../../components/NavBar.jsx'

const Home = () => {
  const classes = useStyles();
  console.log('homeData', homeData)
  return (
    <div className={classes.root}>
  
      {/* <Grid container spacing={3}> */}
        <Grid item xs={12}>
        <NavBar />
        </Grid>
        <Grid item xs={12}>
          {homeData.map((data) => (
            <ButtonBase 
            focusRipple 
            key={data.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: data.width,
            }}
            >
              <span 
              className={classes.imageSrc}
              style={{
                backgroundImage: data.img
              }}
      />
<span className={classes.imageBackdrop}/>
<span className={classes.imageButton}>
<Typography 
component="span"
variant="subtitle1"
color={classes.imageTitle}
>{data.title}
<span className={classes.imageMarked}/>
</Typography>
</span>
            </ButtonBase>
          ))}
        </Grid>
      {/* </Grid> */}
    </div>
  )
}

export default Home;
