import { makeStyles } from '@material-ui/core/styles';
import { pink, green } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            width: '100%',
            marginBottom: theme.spacing(3),
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
        },
        linkPink: {
            display: 'inline-block',
            textDecoration: 'none!important',
            textTransform: 'uppercase',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            color: '#000000',
            "&:hover": {
                color: pink[600],
                textDecoration: 'underline',
            },
        },
    }
));
