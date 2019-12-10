import { makeStyles } from '@material-ui/core/styles';
import { green, pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            maxWidth: '100%',
            margin: `${theme.spacing(2)} auto`,
            borderBottom: `solid 1px #666666`,
            textTransform: 'capitalize',
        },
        container: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        textField: {
            backgroundColor: '#ccc',
            marginLeft: theme.spacing(1),
            paddingLeft: theme.spacing(1),
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
