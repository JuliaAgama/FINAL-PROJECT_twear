import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            width: '100%',
        },
        center: {
            textAlign: 'center',
            margin: '0 auto',
            "&:hover": {
                textDecoration: 'none !important'
            },
        },
    }
));
