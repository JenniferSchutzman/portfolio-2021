import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.background
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  subTitle: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  }
}));

const NavBar = (props) =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h3" noWrap>
            {props.title}
          </Typography>
          <br/>
          <Typography className={classes.subTitle} variant="h5" >
           {props.subtitle}
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
