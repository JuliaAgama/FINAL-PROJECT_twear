import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => (
    {
        header: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontWeight: '700',
            marginTop: theme.spacing(16),
            marginBottom: theme.spacing(1),
        },
        headerXS: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontWeight: '700',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        subHeader: {
            textAlign: "center",
            fontSize: 14,
        },
    }
));