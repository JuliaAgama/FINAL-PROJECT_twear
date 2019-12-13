import { makeStyles } from '@material-ui/core/styles';
import { lime, pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            position: 'relative',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        link: {
            width: '100%',
            textDecoration: 'none',
            color: '#333',
            textTransform: 'capitalize',
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
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(1),
            textTransform: 'capitalize',
        },
        art: {
            color: 'green',
        },
        archiveBtn: {
            position: 'absolute',
            bottom: theme.spacing(1),
            right: theme.spacing(3),
            cursor: 'pointer',
            color: lime[700],
            '&:hover': {
                color: pink[700],
            },
        },
        deleteBtn: {
            position: 'absolute',
            bottom: theme.spacing(1),
            right: theme.spacing(-2),
            cursor: 'pointer',
            color: grey[700],
            '&:hover': {
                color: pink[700],
            },
        },
    }
));
