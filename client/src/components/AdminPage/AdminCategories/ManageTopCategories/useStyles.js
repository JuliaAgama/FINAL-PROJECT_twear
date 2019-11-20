import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        center: {
            textAlign: 'center',
            margin: '0 auto'
        }
    }
));