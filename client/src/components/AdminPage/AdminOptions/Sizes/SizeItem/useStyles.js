import { makeStyles } from '@material-ui/core/styles';
import { green, pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        root: props => ({
            backgroundColor: props.backgroundColor,
            color: theme.color,
        }),
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
        },
        textField: {
            backgroundColor: '#fff',
        },
        justify: {
            width: '100%'
        },
        colorInput: {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(-2)
        },
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            padding: theme.spacing(1)
        },
        verticalCenter: {
            alignItems: 'center',
            paddingRight: theme.spacing(3),
            justifyContent: 'space-around',
        },
        center: {
            textAlign: 'center',
        },
        formControl: {
            margin: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        displayNone: {
            display: 'none',
        },
        displayBlock: {
            display: 'block',
        },
        saveBtn: {
            boxSizing: 'content-box',
            borderRadius: '50%',
            padding: theme.spacing(1),
            cursor: 'pointer',
            color: green[700],
            '&:hover': {
                color: pink[700],
            },
        },
        saveBtnFilled: {
            boxSizing: 'content-box',
            borderRadius: '50%',
            cursor: 'pointer',
            padding: theme.spacing(1),
            backgroundColor: green[700],
            color: grey[50],
            '&:hover': {
                backgroundColor: pink[700],
                color: grey[50],
            },
        },
        deleteBtn: {
            boxSizing: 'content-box',
            borderRadius: '50%',
            padding: theme.spacing(1),
            cursor: 'pointer',
            color: grey[700],
            '&:hover': {
                color: pink[700],
            },
        },
    }
));