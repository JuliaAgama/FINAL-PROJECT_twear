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
        },
        mobileLink: {
            minWidth: '50%',
            color: 'rgba(0, 0, 0, 0.87)',
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
            top: '123px',
            [theme.breakpoints.down('sm')]: {
               position: 'block'
            },
        },
        hide: {
            display: 'none'
        },
    }
));