import React from 'react';

import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import useStyles from './home.styles.js'
import homeData from './home.data.js'

import NavBar from '../../components/NavBar.jsx'

import {useHistory} from 'react-router-dom'


const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToPage = data => {
    history.push(data.route)
  }

  console.log('homeData', homeData)

  return (
    <div className={classes.root}>
        {/* <Grid item xs={12}> */}
        <NavBar />
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
          {homeData.map((data) => (
            
            <ButtonBase 
            focusRipple 
            key={data.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: data.width,
            }}
            onClick={() => goToPage(data)}
            >
              <span 
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${data.img})`
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
        {/* </Grid> */}
    </div>
  )
}

export default Home;
