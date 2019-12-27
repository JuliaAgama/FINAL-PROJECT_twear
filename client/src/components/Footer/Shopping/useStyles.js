import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            height: '150px',
        },
        paper: {
            boxSizing: 'border-box',
            maxWidth: '60%',
            paddingRight: theme.spacing(1),
        },
        link: {
            display: 'block',
            fontSize: '12px',
            color: '#000',
            textDecoration: 'none',
            '&:hover': {
                color: grey[700]
            },
        },
    }
));
