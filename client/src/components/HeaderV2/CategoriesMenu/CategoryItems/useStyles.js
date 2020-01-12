import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        box: {
            padding: '6px 0',
            cursor: 'pointer',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '700',
            textTransform: 'capitalize',
            '&:hover': {
                backgroundColor: grey[200],
            },
        },
        link: {
            minWidth: '25%',
            // [theme.breakpoints.down('sm')]: {
            //     minWidth: '50%',
            // },
            color: 'rgba(0, 0, 0, 0.87)',
            textDecoration: 'none'
        },
        mobileLink: {
            minWidth: '50%',
            color: 'rgba(0, 0, 0, 0.87)',
            textDecoration: 'none'
        },
        border: {
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '15px 0',
        },
        hide: {
            display: 'none'
        },
    }
));