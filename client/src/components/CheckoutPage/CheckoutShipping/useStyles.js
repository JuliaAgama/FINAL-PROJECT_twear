import { makeStyles } from '@material-ui/core/styles';
import { grey, pink } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        root: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        container: {
            marginTop: theme.spacing(2),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        formControl: {
            paddingLeft: theme.spacing(4),
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
        btnLocked: {
            ...theme.typography.button,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            height: '80px',
            border: '1px solid #000',
            backgroundColor: grey[300],
            color: '#fff',
        },
        briefContainer: {
            fontSize: '16px',
            border: `1px solid ${grey[500]}`,
            borderRadius: '5px',
            marginTop: theme.spacing(2),
            padding: theme.spacing(1),
            color: grey[500],
        },
        link: {
            cursor: 'pointer',
            color: '#000',
            fontSize: '14px',
            '&:hover': {
                color: pink[500],
                fontWeight: '700',
            },
        },
    }
));
