import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    flexGrow: 1,
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
    marginTop: "20%",
  },
  image: {
    width: "100%"
  },
  secondButton: {
    marginTop: "20px"
  }
}));

export default useStyles;