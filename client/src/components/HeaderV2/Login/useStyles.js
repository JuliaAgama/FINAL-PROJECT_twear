import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('sm')]: {
                padding: '14px 0',
                backgroundColor: 'white'
            },
            padding: '17px 0',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer'
        },
        link: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        name: {
            marginLeft: '10px'
        },
        span: {
            padding: '1px 0',
        },

    }
));