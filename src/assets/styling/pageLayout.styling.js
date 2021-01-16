import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
  
    flexGrow: 1,
    backgroundColor: "#00796b"
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "100%",
  },
  image: {
    width: "100%",
  },
}));

export default useStyles;