import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingBottom: '20px',
            position: 'relative'
        },
        form: {
            width: '400px',
            [theme.breakpoints.down('sm')]: {
                width: '250px',
            },
        },
        inputContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
        },
        box: {
            textAlign: 'left',
            borderBottom: '2px solid black',
            width: '100%'
        },
        btn: {
            borderRadius: '18px',
            margin: '45px 0',
            outline: 'none!important',
        },
        inputField: {
            width: '48%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        spanContainer: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            margin: '20px 0 20px'
        },
        spinnerContainer: {
            position: 'absolute',
            left: 'calc(50% - 50px)',
            top: 'calc(50% - 35px)',
            [theme.breakpoints.down('sm')]: {
                left: 'calc(50% - 35px)',
            },
        },
        inputPhone: {
            width: '100%',
            position: 'relative'
        },
    }
));