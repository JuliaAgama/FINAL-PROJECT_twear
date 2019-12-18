import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
        },
        textField: {
            margin: `${theme.spacing(1)} auto`,
            width: '100%',
            backgroundColor: '#fff',
        },
        justify: {
            width: '100%'
        },
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
        },
        formControl: {
            margin: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        imgContainer: {
            height: '300px',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        },
        btn: {
            display: 'block',
            width: '25%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
            borderRadius: '18px',
            outline: 'none!important',
            textDecoration: 'none!important',
        },
        displayNone: {
            display: 'none',
        },
        displayBlock: {
            display: 'block',
        },
    }
));
