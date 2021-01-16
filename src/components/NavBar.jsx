import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import menuDrawerData from "./menuDrawer.data.js";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import assisi from "../assets/images/assisi.jpg";
import useStyles from "../assets/styling/navBar.styling.js";
import "fontsource-roboto";

const NavBar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
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
      className={classes.root}
      style={{ backgroundColor: "#00796b", color: "#FFFFFF" }}
    >
      <Button
        onClick={(event) => toggleDrawer(event)}
        className={classes.closeIcon}
      >
        <CloseIcon fontSize="large" style={{ color: "#ffffff" }} />
      </Button>
      <List>
        {menuDrawerData.map((data) => (
          <ListItem
            button
            key={data.listName}
            onClick={() => routeToPage(data.url)}
            className={classes.list}
          >
            <ListItemText
              primary={data.listName}
              // className={classes.text}
              style={{
                fontFamily: "Source Sans Pro, Helvetica, sans-serif",
                fontSize: "50px",
              }}
            >
              {/* <p className={classes.text}>{data.listName}</p> */}
            </ListItemText>
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
