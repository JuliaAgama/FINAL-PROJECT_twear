import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            width: '100%',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.background.paper,
        },
        input: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2,)
        }
    }
));
