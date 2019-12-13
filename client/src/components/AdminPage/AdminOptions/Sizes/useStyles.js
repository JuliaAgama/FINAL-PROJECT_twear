import { makeStyles } from '@material-ui/core/styles';
import { pink, grey } from '@material-ui/core/colors';

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
            paddingRight: theme.spacing(3)
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
        cancelBtn: {
            position: 'relative',
            top: 0,
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