import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: '15px 0',
            },
            borderRight: '1px solid black',
            borderTop: '1px solid black',
            margin: '0',
            padding: '20px 0',
            textAlign: 'center',
        },
        borderRight: {
            borderRight: 'none',
        },
        borderBottom: {
            borderBottom: '1px solid black',
        },
        link: {
            fontWeight: '700',
            fontSize: '1.25rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
            color: 'black',
            textDecoration: 'none'
        },
    }
));