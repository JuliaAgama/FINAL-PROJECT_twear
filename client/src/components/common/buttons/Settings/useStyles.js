import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        fixed: {
            margin: theme.spacing(2),
            textAlign: 'center',
            position: 'fixed',
            top: theme.spacing(2),
            right: theme.spacing(20),
            zIndex: '10000',
            cursor: 'pointer',
        },
    }
));
