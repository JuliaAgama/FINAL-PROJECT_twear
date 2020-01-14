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
            width: 'calc(100% - 20px)',
            // maxWidth: '1171px',
            position: 'absolute',
            top: '130px',
            left: '50%',
            transform: 'translate(-50%)',
            [theme.breakpoints.down('sm')]: {
                top: '120px',
                width: '100%',
            },
            zIndex: '1000',
            backgroundColor: 'white'
        },
        hide: {
            display: 'none'
        },
    }
));