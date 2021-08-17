import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonBase, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./home.styles.js";
import homeData from "./home.data.js";
import NavBar from "../../components/NavBar.jsx";
import Footer from '../../components/Footer'

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToPage = (data) => {
    history.push(data.route);
  };

  console.log('history', history.location.pathname)

  const title = "Jenny Schutzman, Software Engineer";
  const subtitle =
    "Javascript, React, Redux, Angular, Rest APIs, NodeJS, Express, Auth0, Fetch API, Axios, Isomorphic Fetch, useHttp, UI-Bootstrap, Material-UI Next, Semantic UI, i18Next, MySQL, Mongo DB, Pouch DB, Jest, React Testing Library, Mock Service Worker, Git/Github, html, css, atom, IntelliJ, VSCode and more.";

  return (
    <>
        <NavBar title={title} subtitle={subtitle} />
        {homeData.map((data) => (
        <ButtonBase
          focusRipple
          key={data.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: data.width,
            height: "600px"
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
  <Footer />
  </>
  );
};

export default Home;
