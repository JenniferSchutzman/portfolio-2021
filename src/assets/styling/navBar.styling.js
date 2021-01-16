import { makeStyles} from "@material-ui/core/styles";


  // const list = (anchor) => (
  //   // <div
  //   //   // className={FormatColorTextSharp(classes.list, {
  //   //   //   [classes.fullList]: anchor === "top" || anchor === "bottom",
  //   //   // })}
  //   //   role="presentation"
  //   //   onClick={toggleDrawer(false)}
  //   //   onKeyDown={toggleDrawer(false)}
  //   // >
  //   //   <List>
  //   //     {navBarData.map((data) => (
  //   //       // will put history.push onClick o the ListItem mapping to url
  //   //       <ListItem button key={data.listName}>
  //   //         <ListItemText primary={data.listName} />
  //   //       </ListItem>
  //   //     ))}
  //   //   </List>
  //   </div>
  // );



const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
  },
  container: {
    margin: "5%",
    position: "absolute",
    top: "40%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    textAlign: "left",
  },
  fullList: {
    width: 'auto',
    fontSize: "20px"
  },
  menuButton: {
    position: "absolute",
    top: "8px",
    right: "16px",
    padding: "20px"
  },
  closeIcon: {
    marginLeft: "190px" 
  },
  list: {
    width: 250,
  },
  subTitle: {
    fontSize: "12px",
    textTransform: "uppercase",
    margin: "40px",
    fontWeight: 400,
  },
  toolbar: {
    minHeight: "352px",
  },
  title: {
    fontSize: "52px",
    marginBottom: "30px",
    marginLeft: "40px",
  },
}));

export default useStyles;