import { createMuiTheme } from "@material-ui/core/styles";

const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    }
  },

  breakpoints: { 
      values: breakpointValues
     }
});

export default theme;
