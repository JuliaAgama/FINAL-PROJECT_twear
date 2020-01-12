import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => (
    {
        container : {
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },
            padding: '0',
            fontSize: '16px',
            fontWeight: '700',
        },
        item25: {
            width: '25%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                borderLeft: '1px solid black',
                borderRight: '1px solid black'
            },
            textAlign: 'center',
            padding: '20px',
            margin: '0',
            height: '60px',
            boxSizing: 'border-box',
            border: '1px solid black',
            borderTop: 'none',
        },
        item50: {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                borderLeft: '1px solid black',
                borderRight: '1px solid black'
            },
            textAlign: 'center',
            padding: '20px',
            margin: '0',
            border: '1px solid black',
            borderTop: 'none',
            height: '60px',
            boxSizing: 'border-box'
        },
        linkContainer: {
            color: 'black',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        borderLeft: {
            borderLeft: 'none'
        },
        borderRight: {
            borderRight: 'none'
        }
    }
));