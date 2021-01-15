import React from 'react';
import {AppBar, Grid, IconButton, Toolbar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import assisi from '../assets/images/assisi.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
  },
  container: {
    margin: "5%",
    position: "absolute",
    top: "50%",
    left: "45%",
    transform: "translate(-50%, -50%)"
  },
  menuButton: {
    position: "absolute",
    top: "8px",
    right: "16px",
  },
  subTitle: {
    fontSize: "12px",
    textTransform: "uppercase",
    margin: "40px",
    fontWeight: 400,
  },
  toolbar: {
    minHeight: "352px",
  },
  title: {
    fontSize: "52px",
    marginBottom: "30px",
  }
}));

const NavBar = (props) =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        {/* <Toolbar className={classes.toolbar}> */}
        <img src={assisi} alt={assisi} style={{opacity: 0.2, width: "100%", height: "500px" }} />
          <Grid container className={classes.container}>
            <Grid item xs={12} >
             <Typography className={classes.title} variant="h3" >
              {props.title}
             </Typography>
            </Grid>
            <br/>
             <Grid item xs={12}>
              <Typography className={classes.subTitle} variant="h5" >
           {props.subtitle}
          </Typography>
          </Grid>
          </Grid>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}

export default NavBar
