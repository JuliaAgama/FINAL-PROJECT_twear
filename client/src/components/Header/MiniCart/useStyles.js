import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            boxSizing: 'border-box',
            height: '60px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('sm')]: {
                width: '50px',
                minWidth: '0',
                borderRight: '1px solid black'
            },
            padding: '0',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black'
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
            padding: theme.spacing(0, 2),
            fontWeight: '700'
        },
    }
));