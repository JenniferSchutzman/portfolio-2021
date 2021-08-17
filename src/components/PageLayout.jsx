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
        <div className={classes.styleLargeScreen}>
        {props.data.gridSection && (
          <CardContent className={classes.gridSection}>
            <Grid container spacing={5} style={{    padding: "0px 150px "}}>
              {props.data.gridSection.map((x) => {
                return (
                  <>
                   <Grid item xs={12} md={4} >   
                    <h2>{x.gridHeader}</h2>
                    </Grid>
                    <Grid item xs={12} md={8} className={classes.subHeader}>
                    <h5>{x.gridSubHeader}</h5>
                      </Grid>
                    <Grid item xs={12} md={4} center>
                      <img
                        className={classes.imageGridSection}
                        src={x.gridImage}
                        alt={x.gridHeader}
                        style={{maxHeight: "800px"}}
                      />
                    </Grid>
              
                    <Grid item xs={12} md={8}  style = {{marginTop: "-50px"}}>
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
                          <Button variant="contained" style={{width: "100%", fontWeight: "700"}}>
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
                              <Button variant="contained" style={{width: "100%", fontWeight: "700"}}  >
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
        </div>
      </Card>
    </MuiThemeProvider>
  );
};

export default PageLayout;
