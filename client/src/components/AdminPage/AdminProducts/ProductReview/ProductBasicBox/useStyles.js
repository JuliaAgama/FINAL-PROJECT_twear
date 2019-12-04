import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        details: {
            position: 'relative',
            paddingBottom: theme.spacing(10),
            paddingRight: theme.spacing(4),
        },
        price: {
            position: 'absolute',
            bottom: 0,
            paddingBottom: theme.spacing(2),
            fontWeight: 'bold',
        },
        carousel: {
            maxWidth: '100%',
            maxHeight: '90%',
        },
    }
));
