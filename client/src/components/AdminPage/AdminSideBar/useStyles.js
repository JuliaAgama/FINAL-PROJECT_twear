import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            padding: theme.spacing(2),
            flexGrow: 1,
            marginBottom: theme.spacing(4)
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