import { makeStyles } from '@material-ui/core/styles';
import { grey, pink } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            marginTop: theme.spacing(2),
            paddingLeft: '1%',
            paddingRight: '1%',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        logo: {
            width: '8rem',
            marginBottom: theme.spacing(2),
        },
        image: {
            maxWidth: '100%',
        },
        link: {
            cursor: 'pointer',
            color: '#000',
            fontSize: '14px',
            '&:hover': {
                color: pink[500],
                fontWeight: '700',
            },
        },
    }
));
