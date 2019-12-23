import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => (
    {
        header: {
            textAlign: "center",
            fontSize: '2.25rem',
            fontWeight: '700',
            paddingTop: theme.spacing(10),
        },
        headerXS: {
            textAlign: "center",
            fontSize: '2.25rem',
            fontWeight: '700',
            marginTop: "10px",
            marginBottom: "10px",
        },
        subHeader: {
            textAlign: "center",
            fontSize: 14,
        },
    }
));
