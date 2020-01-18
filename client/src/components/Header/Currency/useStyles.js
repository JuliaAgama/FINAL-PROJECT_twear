import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            [theme.breakpoints.down('sm')]: {
                padding: '14px 0',
                backgroundColor: 'white'
            },
            padding: '18px 0',
            fontSize: '16px',
            fontWeight: '700',
            display: 'flex',
            justifyContent: 'space-around',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
        },
        currentCurrency: {
            borderBottom : '1px solid black'
        },
        currency : {
            borderBottom : '1px solid transparent'
        }
    }
));