import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonBase, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./home.styles.js";
import homeData from "./home.data.js";
import NavBar from "../../components/NavBar.jsx";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToPage = (data) => {
    history.push(data.route);
  };

  const title = "Jenny Schutzman, Software Engineer";
  const subtitle =
    "Javascript, React, Redux, Angular, Rest APIs, NodeJS, Express, Auth0, Fetch API, Axios, Isomorphic Fetch, useHttp, UI-Bootstrap, Material-UI Next, Semantic UI, i18Next, MySQL, Mongo DB, Pouch DB, Jest, React-Testing-Library, Mock Service Worker, Git/Github, html, css, atom, IntelliJ, VSCode and more.";

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <NavBar title={title} subtitle={subtitle} />
      </Grid>
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
              backgroundImage: `url(${data.img})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color={classes.imageTitle}
              style={{
                fontSize: "30px",
              }}
            >
              {data.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};

export default Home;
