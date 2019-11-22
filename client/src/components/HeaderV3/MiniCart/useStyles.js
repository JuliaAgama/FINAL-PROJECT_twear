import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '50px',
                minWidth: '0',
                padding: '12px 0',
                borderRight: '1px solid black'
            },
            padding: '2px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
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