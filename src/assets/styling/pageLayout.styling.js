import { green } from "@material-ui/core/colors";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    flexGrow: 1,
    paddingBottom: "50px",
    backgroundColor: "#eeeee4",
    color: "black",
    marginTop: "-20px"
  },
  card: {
    fontSize: "18px",
    padding: "50px 150px",
    lineHeight: "30px",
    fontFamily: "Roboto, sans-serif",
  }
  ,
  button: {
    width: "100%",
  },
  imageGridSection: {
     width: "100%",
    height: "250px",
    marginTop: "-10px",
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
  gridSection: {
    padding: "50px 0 0 0",
  },
  subHeader: {
    textAlign: "right"
  }
}));

export default useStyles;