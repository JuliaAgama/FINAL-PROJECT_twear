import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles(theme => ({
  menuItem: {
    display: "flex",
    fontSize: '2.25rem',
    textTransform: "uppercase",
    // border: "1px solid black",
    backgroundColor: "red",
    justifyContent: "center",
    height: "25vh",
    alignItems: "center",
    margin: 0
  },
 
}));
