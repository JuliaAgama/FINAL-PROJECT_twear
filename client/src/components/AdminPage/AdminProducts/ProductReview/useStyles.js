import { makeStyles } from '@material-ui/core/styles';
import { pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        root: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
        },
        paperOne: {
            margin: theme.spacing(1),
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(4),
            border: '1px solid #333',
            padding: theme.spacing(1),
            alignItems: 'center',
            minHeight: '200px',
            position: 'relative',
        },
        paperTwo: {
            margin: theme.spacing(1),
            marginBottom: theme.spacing(4),
            border: '1px solid #333',
            padding: theme.spacing(1),
            alignItems: 'top',
            minHeight: '200px',
            position: 'relative',
        },
        paperThree: {
            margin: theme.spacing(1),
            marginBottom: theme.spacing(4),
            padding: theme.spacing(1),
            justifyContent: 'center',
            alignItems: 'center',
        },
        editBtn: {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'translate(-45%, -45%)',
        },
        saveBtn: {
            display: 'block',
            width: '100px',
            marginLeft: theme.spacing(2),
            borderRadius: '18px',
            outline: 'none!important',
            textDecoration: 'none!important',
        },
        link: {
            display: 'inline-block',
            textDecoration: 'none!important',
            textTransform: 'uppercase',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(5),
            color: '#000000',
            "&:hover": {
                color: pink[600],
                textDecoration: 'underline',
            },
        },
        light: {
            color: grey[400],
            textTransform: 'uppercase',
        },
    }
));
