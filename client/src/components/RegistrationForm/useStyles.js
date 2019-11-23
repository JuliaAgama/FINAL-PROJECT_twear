import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            maxWidth: '1200px',
            justifyContent: 'center',
            paddingBottom: '20px',
        },
        form: {
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '250px',
            },
        },
        hide: {
            display: 'none'
        },
        btn: {
            borderRadius: '18px',
            margin: '25px 0',
            outline: 'none!important',
            width: '50%',
            display: 'block',
            marginLeft: '25%'
        },
        link: {
            color: 'black',
        },
        spanContainer: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            margin: '20px 0 20px'
        },
        box: {
            textAlign: 'left',
            borderBottom: '2px solid black',
            width: '100%'
        },
        radioBtn: {
            marginRight: '50px',
            [theme.breakpoints.down('sm')]: {
                marginRight: '20px',
            },
        },
        inputField: {
            width: '48%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        inputContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
        },
        phone: {
            textAlign: 'center',
            width: '100%'
        },
        text: {
            paddingTop: '20px',
            textAlign: 'justify',
            borderTop: '2px solid black'
        },
        checkboxText: {
            textAlign: 'justify',
            fontSize: '14px'
        }
    }
));