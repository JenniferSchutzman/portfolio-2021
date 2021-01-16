import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    // minWidth: 275,
    flexGrow: 1,
    backgroundColor: "#00796b"
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "100%",
  },
  gridSection: {

  },
  // description: {
  //   backgroundColor: "#00ff00",
  // },
  image: {
    width: "100%",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default useStyles;