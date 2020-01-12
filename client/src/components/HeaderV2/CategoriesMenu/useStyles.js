import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        genderContainer : {
            padding: '18px',
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
            cursor: 'pointer',
        }
    }
));