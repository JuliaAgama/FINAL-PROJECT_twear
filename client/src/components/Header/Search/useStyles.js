import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            boxSizing: 'border-box',
            height: '60px',
            width: '100%',
            padding: '16px 0',
            fontSize: '16px',
            fontWeight: '700',
            // borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
                borderBottom: '1px solid black',
            },
            [theme.breakpoints.down('sm')]: {
                // border: '1px solid black',
                // borderTop: 'none',
                padding: '8px 0',
            },
        },
        search: {
            padding: '11px 0 11px 11px',
        },
        input: {
            maxWidth: '85%',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '10px'
            },
        },
    }
));