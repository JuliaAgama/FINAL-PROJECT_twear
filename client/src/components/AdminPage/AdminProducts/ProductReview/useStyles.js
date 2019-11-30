import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
        },
        paper: {
            margin: theme.spacing(1),
            border: '1px solid #333',
            padding: theme.spacing(1),
            justifyContent: 'space-between',
            minHeight: '200px',
            position: 'relative',
        },
        relative: {
            position: 'relative',
            paddingBottom: theme.spacing(10),
        },
        editBtn: {
            position: 'absolute',
            top: theme.spacing(-4),
            left: theme.spacing(-4),
        },
        price: {
            position: 'absolute',
            bottom: 0,
            paddingBottom: theme.spacing(2),
            fontWeight: 'bold',
        },
        carousel: {
            paddingLeft: theme.spacing(4)
        },
    }
));