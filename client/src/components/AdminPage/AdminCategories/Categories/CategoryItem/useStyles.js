import { makeStyles } from '@material-ui/core/styles';
import { blue, pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            margin: 'auto',
            maxWidth: '100%',
        },
        container: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        image: {
            width: 50,
            height: 40,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        title: {
            marginLeft: theme.spacing(2),
            textTransform: 'capitalize',
        },
        editBtn: {
            cursor: 'pointer',
            color: blue[700],
            '&:hover': {
                color: pink[700],
            },
        },
        deleteBtn: {
            cursor: 'pointer',
            color: grey[700],
            '&:hover': {
                color: pink[700],
            },
        },
    }
));