import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  Card: {
    width: "100%",
    margin: "auto"
  },
  
  Media: {
    height: "100%",
    width: "100%",
    padding: "20px 0"
  },

  categoriesMainHeader: {
    textAlign: "center",
    fontSize: '2.25rem',
    fontWeight: '700',
    marginTop: "70px"
  },
  categoriesMainHeaderXS: {
    textAlign: "center",
    fontSize: '2.25rem',
    fontWeight: '700',
    marginTop: "10px",
    marginBottom: "10px",
  },

  categoriesMainSubheader: {
    textAlign: "center",
    fontSize: 14
  }
}));
