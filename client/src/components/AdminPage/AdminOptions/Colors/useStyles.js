import { makeStyles } from '@material-ui/core/styles';
import { pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            margin: 'auto',
            maxWidth: '100%',
            textTransform: 'capitalize',
        },
        container: {
            marginTop: theme.spacing(1),
            paddingBottom: theme.spacing(5),
            paddingRight: theme.spacing(2),
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
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