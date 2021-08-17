import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import useStyles from "../assets/styling/pageLayout.styling.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/styling/theme.js";

const PageLayout = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Card>
        <div className={classes.pageLayout}>
          <img
            src={props.data.img}
            alt={props.data.img}
            className={classes.image}
          />
          {props.data.p && (
            <CardContent className={classes.card}>
              {props.data.p.map((p) => {
                return (
                  <p >
                    {p}
                  </p>
                );
              })}
            </CardContent>
          )}
        </div>
        {props.data.gridSection && (
          <CardContent className={classes.gridSection}>
            <Grid container spacing={5} style={{    padding: "50px 100px"}}>
              {props.data.gridSection.map((x) => {
                return (
                  <>
                    <Grid item xs={12} md={3} center>
                      <img
                        className={classes.imageGridSection}
                        src={x.gridImage}
                        alt={x.gridHeader}
                        style={{maxHeight: "800px"}}
                      />
                    </Grid>
                    <Grid item xs={12} md={9} >
                      <h2>{x.gridHeader}</h2>
                      <h5>{x.gridSubHeader}</h5>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "18px",
                          fontFamily: "Roboto, Helvetica, sans-serif",
                        }}
                      >
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
                          <Button variant="contained">
                            {x.gridButtonOneText}
                          </Button>
                        </a>
                        {x.gridButtonTwoLink && (
                          <div className={classes.secondButton}>
                            <a
                              href={x.gridButtonTwoLink}
                              target={"_blank"}
                              rel="noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              <Button variant="contained">
                                {x.gridButtonTwoText}
                              </Button>
                            </a>
                          </div>
                        )}
                      </div>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </CardContent>
        )}
      </Card>
    </MuiThemeProvider>
  );
};

export default PageLayout;
