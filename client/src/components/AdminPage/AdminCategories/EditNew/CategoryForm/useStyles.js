import { makeStyles } from '@material-ui/core/styles';
import { green, grey, pink } from '@material-ui/core/colors';

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
        newImg: {
            position: 'absolute',
            bottom: '3px',
            left: '3px',
            borderRadius: '5px',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            backgroundColor: green[600],
            color: '#fff',
        },
        deleteBtn: {
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(50%, -50%)',
            boxSizing: 'content-box',
            border: `1px solid ${grey[700]}`,
            borderRadius: '50%',
            padding: theme.spacing(1),
            cursor: 'pointer',
            backgroundColor: '#fff',
            color: grey[700],
            '&:hover': {
                color: pink[700],
                border: `1px solid ${pink[700]}`,
            },
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
