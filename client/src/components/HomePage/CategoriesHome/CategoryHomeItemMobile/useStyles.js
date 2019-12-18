import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  header: {
    backgroundColor: "#333",
    color: "white",
    fontWeight: 700,
    fontSize: "16px",
    margin: "0",
    padding: "10px",
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px"
  },

  btn: {
    padding: "50px",
    margin: "20px",
    border: "1px solid black"
  }
}));
