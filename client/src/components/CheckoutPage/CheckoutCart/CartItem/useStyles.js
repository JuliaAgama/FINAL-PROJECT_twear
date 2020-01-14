import { makeStyles } from '@material-ui/core/styles';
import { grey, red, pink } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        imgContainer: {
            height: '90px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // marginBottom: theme.spacing(1),
            border: `1px solid ${grey[300]}`,
            borderRadius: '5px',
        },
        title: {
            textTransform: 'capitalize',
        },
        badge: {
            marginTop: theme.spacing(-1),
        },
    }
));
