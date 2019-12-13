import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
        badge: {
            margin: theme.spacing(2),
            fontWeight: '700'

        },
        padding: {
            padding: theme.spacing(0, 2),
            fontWeight: '700'
        },
    }
));