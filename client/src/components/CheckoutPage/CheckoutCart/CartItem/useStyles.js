import { makeStyles } from '@material-ui/core/styles';
import { grey} from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        imgContainer: {
            height: '90px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
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
