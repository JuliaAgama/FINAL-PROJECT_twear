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
            width: '401%',
            padding: '0',
            marginLeft: '-1px',
            position: 'absolute',
            left: '-100%',
            transform: 'translate(-50%)',
            borderLeft: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                top: '118px',
                width: 'calc(98vw)',
                left : '0',
                right: '0',
                transform: 'translate(0)',
                bottom: '',
                flexDirection: 'column',
                borderTop: '1px solid black',
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