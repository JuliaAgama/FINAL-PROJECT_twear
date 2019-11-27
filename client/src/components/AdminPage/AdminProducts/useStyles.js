import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            width: '100%',
            margin: theme.spacing(3,1),
            padding: theme.spacing(1,3),
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.background.paper,
            // textTransform: 'capitalize',
        },
        listing: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }
));