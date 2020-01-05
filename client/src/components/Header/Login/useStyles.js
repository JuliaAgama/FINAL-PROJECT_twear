import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            boxSizing: 'border-box',
            position: 'relative',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            '&:hover': {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('sm')]: {
                // width: '50%',
                padding: '14px 0',
                backgroundColor: 'white'
            },
            padding: '16px 0',
            fontSize: '16px',
            fontWeight: '700',
            // borderBottom: '1px solid black',
            cursor: 'pointer'
        },
        linkContainer: {
            color: 'black',
            textDecoration: 'none'
        },
        link: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        name: {
            marginLeft: '10px'
        },
        span: {
            padding: '1px 0',
        },
        subMenu : {
            boxSizing: 'border-box',
            display: 'flex',
            width: 'calc(96vw)',
            maxWidth: '1200px',
            // width: 'calc(100% + 2px)',
            padding: '0',
            // marginBottom: '-55px',
            position: 'absolute',
            // top: '119px',
            // bottom: '-100%',
            left: '-100%',
            transform: 'translate(-50%)',
            // right: '-1px',
            // borderTop: '1px solid black',
            borderLeft: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                top: '118px',
                width: 'calc(96vw - 2px)',
                left : '0',
                right: '0',
                transform: 'translate(0)',
                bottom: '',
                flexDirection: 'column',
                borderTop: '1px solid black',
                marginLeft: '-1px',
                marginRight: '-1px',
                marginBottom: '-45px',
            },
        },
        subMenuItem: {
            fontSize: '16px',
            fontWeight: '700',
            textAlign: 'center',
            padding: '16px 0',
            backgroundColor: grey[50],
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('sm')]: {
                backgroundColor: 'white',
                width: '100%'
            },
        },
    }
));