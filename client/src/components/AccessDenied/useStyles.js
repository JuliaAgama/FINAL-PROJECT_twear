import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            // display: 'flex',
            padding: '0',
            margin: '0',
            position: 'relative',
            // justifyContent: 'center',
            width: '100%',
            height: '100vh'
        },link: {
            display: 'inline-block',
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translate(-50%)',
            fontSize: '25px',
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
        img: {
            width: '100%'
        }
    }
));