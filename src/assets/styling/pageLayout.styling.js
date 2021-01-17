import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    flexGrow: 1,
    backgroundColor: "#00796b"
  },
  button: {
    width: "100%",
  },
  image: {
    width: "100%",
    marginTop: "25px"
  },
  secondButton: {
    marginTop: "20px"
  }
}));

export default useStyles;