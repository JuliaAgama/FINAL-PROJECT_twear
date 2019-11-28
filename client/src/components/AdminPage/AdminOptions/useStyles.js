import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        listing: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        paper: {
            margin: theme.spacing(0,1,3),
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: theme.spacing(5)
        },
        expand: {
            transform: 'rotate(0deg)',
            margin: theme.spacing(2),
            textAlign: 'center',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        expanded: {
            marginLeft: theme.spacing(12)
        }
    }
));