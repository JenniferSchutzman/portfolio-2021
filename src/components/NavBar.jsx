import React from "react";
import {
  AppBar,
  Button,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import HomeIcon from '@material-ui/icons/Home';
import assisi from "../assets/images/assisi.jpg";
import useStyles from "../assets/styling/navBar.styling.js";
import "fontsource-roboto";

const NavBar = (props) => {
  const [showHome, setShowHome] = React.useState(false)
  const history = useHistory();
  const classes = useStyles();

  React.useEffect(() => {
    history.location.pathname === "/" ? setShowHome(false) : setShowHome(true)
  })
  

  const goHome = () => {
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#063970" }}>
        <img
          src={assisi}
          alt={assisi}
          style={{ opacity: 0.2, width: "100%", height: "500px"}}
        />
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              style={{
                fontFamily: "Source Sans Pro, Helvetica, sans-serif",
              }}
              variant="h3"
            >
              {props.title}
            </Typography>
            <hr
              style={{ width: "90%", textAlign: "left", marginLeft: "40px" }}
            ></hr>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography
              className={classes.subTitle}
              style={{
                fontFamily: "Source Sans Pro, Helvetica, sans-serif",
              }}
              variant="h6"
            >
              {props.subtitle}
            </Typography>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
        {showHome && (<Button
          edge="start"
          className={classes.menuButton}
          onClick={()=> goHome()}
          color="inherit"
          aria-label="menu toggle"
        >
          <Typography variant="h5" style={{ paddingRight: "20px" }}>
            Home 
          </Typography>
          <HomeIcon fontSize="large" />
        </Button>)}
        
      </AppBar>
    </div>
  );
};

export default NavBar;
