import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => (
    {
        container: {
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            // marginTop: theme.spacing(3),
        },
        paper: {
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
            padding: theme.spacing(3),
        },
        paperSocial: {
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
            padding: theme.spacing(3),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    }
));
