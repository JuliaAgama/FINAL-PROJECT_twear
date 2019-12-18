import { makeStyles } from '@material-ui/core/styles';
import { green, grey, pink } from '@material-ui/core/colors';


export default makeStyles(theme => (
    {
        imgContainer: {
            height: '180px',
            position: 'relative',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
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
    }
));
