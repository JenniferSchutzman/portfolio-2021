import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    flexGrow: 1,
    paddingBottom: "50px",
    backgroundColor: "#eeeee4",
    color: "black",
    // marginTop: "-20px"
  },
  card: {
    fontSize: "18px",
    [theme.breakpoints.up('sm')]: {
      padding: "50px 150px",
    },
    padding: "20px",
    lineHeight: "30px",
    fontFamily: "Roboto, sans-serif",
  }
  ,
  button: {
    width: "100%",
  },
  gridPadding: {
    [theme.breakpoints.up('xs')]: {
      padding: "0px 150px "
    },
    padding: "20px",
  
  },
  gridSection: {
    [theme.breakpoints.up('md')]:{
      margin: "100px 200px"
    },
    [theme.breakpoints.up('lg')]:{
      margin: "200px 300px"
    },
    // [theme.breakpoints.up('xs')]:{
    //   margin: "10px"
    // },
    margin: "5px"

  },
  imageGridSection: {
     width: "100%",
    height: "250px",
    marginTop: "-20px",
    [theme.breakpoints.up('xl')]: {
      width: "500px",
      height: "250px",
    }
  },
  image: {
    width: "100%"
  },
  secondButton: {
    marginTop: "20px"
  },
  subHeader: {
    [theme.breakpoints.up('sm')]:{
      textAlign: "right"
    },
    [theme.breakpoints.down('sm')]:{
      margin: "-50px 0px 10px 0px"
    } 
  }
}));

export default useStyles;