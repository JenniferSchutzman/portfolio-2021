import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import assisi from "../assets/images/assisi.jpg";
import useStyles from "../assets/styling/navBar.styling.js";
import "fontsource-roboto";
import navBarData from "./navBar.data.js";
import CloseIcon from "@material-ui/icons/Close";

const NavBar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const toggleDrawer = (event) => {
    console.log("event inside toggleDrawer", event);
    console.log("openMenu", openMenu);
    // if (
    //   event &&
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }
    // put breakpoints in here
    setOpenMenu(!openMenu);
  };

  const routeToPage = (url) => {
    history.push(url);
  };

  const list = (
    <div
      role="presentation"
      onClick={(event) => toggleDrawer(event)}
      onKeyDown={(event) => toggleDrawer(event)}
    >
      <Button onClick={toggleDrawer} className={classes.closeIcon}>
        <CloseIcon fontSize="large" />
      </Button>
      <List className={classes.fullList}>
        {navBarData.map((data) => (
          <ListItem
            button
            key={data.listName}
            onClick={() => routeToPage(data.url)}
            className={classes.list}
          >
            <ListItemText
              primary={data.listName}
              className={classes.fullList}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <img
          src={assisi}
          alt={assisi}
          style={{ opacity: 0.2, width: "100%", height: "500px" }}
        />
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h3">
              {props.title}
            </Typography>
            <hr
              style={{ width: "90%", textAlign: "left", marginLeft: "40px" }}
            ></hr>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Typography className={classes.subTitle} variant="h5">
              {props.subtitle}
            </Typography>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
        <Button
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer}
          color="inherit"
          aria-label="menu toggle"
        >
          <Typography variant="h5" style={{ paddingRight: "20px" }}>
            Menu
          </Typography>
          <MenuIcon fontSize="large" />
        </Button>
        {openMenu && (
          <Drawer
            anchor={"right"}
            className={classes.menuModal}
            open={openMenu}
          >
            {list}
          </Drawer>
        )}
      </AppBar>
    </div>
  );
};

export default NavBar;
