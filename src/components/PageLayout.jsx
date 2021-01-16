import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import useStyles from "../assets/styling/pageLayout.styling.js";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";
import theme from "../assets/styling/theme.js";

const PageLayout = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Card className={classes.root}>
        <img
          src={props.data.img}
          alt={props.data.img}
          className={classes.image}
        />
        <CardContent>
          {props.data.p &&
            props.data.p.map((p) => {
              return <p>{p}</p>;
            })}
        </CardContent>
        <CardContent>
          <Grid container spacing={5}>
            {props.data.gridSection &&
              props.data.gridSection.map((x) => {
                return (
                  <>
                    <Grid item xs={12} sm={3} center>
                      <img
                        className={classes.image}
                        src={x.gridImage}
                        alt={x.gridHeader}
                      />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <h2>{x.gridHeader}</h2>
                      <h5>{x.gridSubHeader}</h5>
                      <p>
                        {x.gridDescription.map((bulletPoint) => {
                          return (
                            <Typography paragraph>{bulletPoint}</Typography>
                          );
                        })}
                      </p>
                      <div className={classes.button}>
                        <a
                          href={x.gridButtonOneLink}
                          target={"_blank"}
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Button variant="contained" color="primary">
                            {x.gridButtonOneText}
                          </Button>
                        </a>
                        {x.gridButtonTwoLink && (
                          <a
                            href={x.gridButtonTwoLink}
                            target={"_blank"}
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <Button variant="contained" color="primary">
                              {x.gridButtonTwoText}
                            </Button>
                          </a>
                        )}
                      </div>
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};

export default PageLayout;
