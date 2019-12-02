import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            margin: 'auto',
            maxWidth: '100%',
            textTransform: 'capitalize',
        },
        container: {
            marginTop: theme.spacing(1),
            paddingBottom: theme.spacing(5),
            paddingRight: theme.spacing(2),
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    }
));