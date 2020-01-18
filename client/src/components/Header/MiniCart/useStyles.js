import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
            padding: '0',
            fontSize: '16px',
            fontWeight: '700',
            [theme.breakpoints.down('sm')]: {
                height: '60px'
            },
            [theme.breakpoints.down('xs')]: {
                height: '50px'
            }
        },
        link: {
            color: 'inherit',
            textDecoration: 'none',
        },
        badge: {
            marginTop: theme.spacing(1),
            fontWeight: '700'
        },
        padding: {
            padding: theme.spacing(1, 2),
            fontWeight: '700'
        }
    }
));