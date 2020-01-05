import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => (
    {
        header: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontWeight: '700',
            marginTop: theme.spacing(16),
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            }
        },
        subHeader: {
            textAlign: "center",
            fontSize: 14,
        },
        Media: {
            height: "100%",
            width: "100%",
            borderTop: '1px solid #000',
            borderLeft: '1px solid #000',
        },
    }
));
