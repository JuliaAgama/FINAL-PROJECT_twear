import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => (
    {
        root: {
            marginBottom: theme.spacing(5),
        },
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
        menuItemGrid: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },

        Media: {
            height: "100%",
            width: "100%",
            padding: "20px 0"
        },
    }
));
