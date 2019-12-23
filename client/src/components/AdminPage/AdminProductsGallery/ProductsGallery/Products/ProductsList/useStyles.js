import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            width: '100%',
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(3),
            padding: theme.spacing(1),
            paddingLeft: 0,
            paddingRight: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.background.paper,
        },
    }
));