import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    flexGrow: 1,
    backgroundColor: "#00796b",
    marginTop: "-20px"
  },
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