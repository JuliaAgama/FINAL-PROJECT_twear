import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        containerBorder: {
            borderRight: '1px solid black'
        },
        container : {
            boxSizing: 'border-box',
            height: '60px',
            width: '50%',
            padding: '16px',
            '&:hover': {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('sm')]: {
                padding: '15px 0',
                backgroundColor: 'white'
            },
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
            cursor: 'pointer',
        },
    }
));