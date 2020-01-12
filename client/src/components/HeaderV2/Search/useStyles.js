import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            padding: '29px 0',
            fontSize: '16px',
            fontWeight: '700',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
            [theme.breakpoints.down('sm')]: {
                padding: '14px 0',
            },
            [theme.breakpoints.down('xs')]: {
                padding: '11px 0',
            },
        },
        search: {
            padding: '13px 0 13px 13px',
        },
        input: {
            maxWidth: '85%',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '10px'
            },
        },
    }
));