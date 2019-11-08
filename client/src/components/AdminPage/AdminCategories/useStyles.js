import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            height: '100vh',
        },
        header: {
            paddingTop: '1rem',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
        paper: {
            margin: theme.spacing(3,1),
        }
    }
));