import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        box: {
            padding: '6px 0',
            cursor: 'pointer',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '700'
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
            width: '100%',
            position: 'absolute',
            top: '115px',
            [theme.breakpoints.down('sm')]: {
               position: 'static',
                borderLeft: 'none',
                borderRight: 'none',
            },
            zIndex: '100000',
            backgroundColor: 'white'
        },
        hide: {
            display: 'none'
        },
    }
));