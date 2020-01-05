import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        root: {
            width: '100%',
            minHeight: '50vh',
            marginBottom: theme.spacing(5),
        },
        header: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontWeight: '700',
            marginTop: theme.spacing(16),
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            }
        },
        btnRegular: {
            ...theme.typography.button,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            height: '80px',
            border: '1px solid #000',
            backgroundColor: theme.palette.background.paper,
            color: '#000',
            "&:hover": {
                backgroundColor: grey[200],
            },
        },
        btnImportant: {
            ...theme.typography.button,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            height: '80px',
            border: '1px solid #000',
            backgroundColor: grey[900],
            color: '#fff',
            "&:hover": {
                backgroundColor: '#000',
            },
        },
    }
));
