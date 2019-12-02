import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
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
    }
));
