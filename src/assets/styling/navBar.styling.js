import { makeStyles} from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    flex: 1,
    backgroundColor: "#999793",
    color: "white",
    span: {
      fontSize: "26px",
    }
  },
  menuModal: {
    backgroundColor: "pink",
    color: "orange",
  },
  container: {
    margin: "5%",
    position: "absolute",
    top: "40%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    textAlign: "left",
    [theme.breakpoints.down('md')]: {
      top: '50%',
    },
  },
    fullList: {
    width: 'auto',
  },
  closeIcon: {
    marginLeft: "190px" ,
    marginTop: "20px",
  },
  list: {
    width: 250,
    color: "FFFFFF" ,
    [theme.breakpoints.only('xs')]: {
     width: "100%"
    },
  },
  menuButton: {
    position: "absolute",
    top: "8px",
    right: "16px",
    padding: "20px"
  },
  subTitle: {
    textTransform: "uppercase",
    margin: "40px",
    fontWeight: 400,
    [theme.breakpoints.only('xs')]: {
      fontSize: '14px',
      marginTop: "5px",
      marginRight: "20px",
      marginBottom: "0px"
    },
  },
  toolbar: {
    minHeight: "352px",
  },
  title: {
    fontSize: "52px",
    marginBottom: "30px",
    marginLeft: "40px",
    [theme.breakpoints.only('xs')]: {
      fontSize: '20px',
    },
    
  },
}));

export default useStyles;