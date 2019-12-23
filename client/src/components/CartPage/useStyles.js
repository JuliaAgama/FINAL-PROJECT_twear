import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            height: '100vh',
            // border: '1px solid #000',
        },
        header: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontSize: '2.25rem',
            fontWeight: '700',
            paddingTop: theme.spacing(10),
        },
        headerXS: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontSize: '2.25rem',
            fontWeight: '700',
            marginTop: "10px",
            marginBottom: "10px",
        },
    }
));
