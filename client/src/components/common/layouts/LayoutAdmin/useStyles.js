import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            height: '100vh',
        },
        paper: {
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
        },
        logo: {
            width: '8rem',
            marginTop: '1rem'
        }
    }
));
