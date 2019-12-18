import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(4),
            textAlign: 'center',
        },
        link: {
            textDecoration: 'none',
        },
        listing: {
            padding: theme.spacing(2),
            flexGrow: 1,
            marginBottom: theme.spacing(5)
        },
        paper: {
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            textTransform: 'capitalize'
        },
    }
));
