import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            width: '50%',
            borderRight: '1px solid black',
            borderTop: '1px solid black',
            margin: '0',
            // padding: '10px 0',
            textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    '&:hover': {
                        backgroundColor: grey[200],
                    },
                },
        },
        borderRight: {
            borderRight: 'none',
        },
        borderBottom: {
            borderBottom: '1px solid black',
        },
        link: {
            display: 'block',
            width: '100%',
            height: '100%',
            fontWeight: '700',
            fontSize: '1.25rem',
            textTransform: 'uppercase',
            padding: '10px 0',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
            color: 'black',
            textDecoration: 'none'
        },
    }
));