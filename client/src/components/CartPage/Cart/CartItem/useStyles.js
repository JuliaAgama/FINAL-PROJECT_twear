import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            borderBottom: '1px solid #000',
        },
        imgContainer: {
            height: '200px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            cursor: 'pointer',
            marginBottom: theme.spacing(1),
        },
        title: {
            textTransform: 'capitalize',
        },
        info: {
            color: grey[700],
            fontStyle: 'italic',
        },
        btnQuantity: {
            cursor: 'pointer',
            color: '#000',
            marginBottom: theme.spacing(-1),
            "&:hover": {
                color: grey[700],
            },
        },
        btnRemove: {
            cursor: 'pointer',
            margin: '0 auto',
            border: '1px solid #000',
            textTransform: 'uppercase',
            textAlign: 'center',
            color: '#000',
            "&:hover": {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('xs')]: {
                borderTop: 'none',
                borderBottom: 'none',
            },
        },
    }
));
