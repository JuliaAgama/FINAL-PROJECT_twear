import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            boxSizing: 'border-box',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
                padding: '14px 0',
                backgroundColor: 'white'
            },
            padding: '16px 0',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
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
            display: 'flex',
            width: '100%',
            padding: '0',
            margin: '0',
            position: 'absolute',
            bottom: '-55px',
            left : '0',
            border: '1px solid black',
            borderTop: 'none',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                bottom: '-165px'
            },
        },
        subMenuItem: {
            fontSize: '16px',
            fontWeight: '700',
            textAlign: 'center',
            padding: '16px 0',
            backgroundColor: 'white',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
        },
        borderRB: {
            borderRight: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                borderRight: 'none',
                borderBottom: '1px solid black',
            },
        },
        borderLT: {
            borderLeft: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                borderLeft: 'none',
                borderTop: '1px solid black',
            },
        }
    }
));