import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            margin: 'auto',
            maxWidth: '100%',
            marginTop: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            justifyContent: 'space-around',
        },
        container: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
        },
    }
));
