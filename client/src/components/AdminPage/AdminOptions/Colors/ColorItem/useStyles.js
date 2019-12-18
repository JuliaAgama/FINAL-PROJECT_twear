import { makeStyles } from '@material-ui/core/styles';
import { green, pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            margin: 'auto',
            maxWidth: '100%',
            marginTop: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            justifyContent: 'space-around',
        },
        container: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
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
