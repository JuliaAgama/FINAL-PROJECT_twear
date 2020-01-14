import { makeStyles } from '@material-ui/core/styles';
import { grey, pink, blue } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        root: {
            width: '100%',
            minHeight: '50vh',
            marginBottom: theme.spacing(2),
        },
        breadcrumb: {
            fontSize: '14px',
            marginBottom: theme.spacing(2),
        },
        breadcrumbActive: {
            color: '#000',
            fontWeight: '700',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                height: '150%',
                width: '100%',
                transform: 'translate(-50%, -50%)',
                borderTop: `1px solid ${grey[500]}`,
                borderBottom: `1px solid ${grey[500]}`,
            },
        },
        breadcrumbLink: {
            color: grey[600],
            cursor: 'pointer',
            '&:hover': {
                color: pink[500],
                fontWeight: '700',
            }
        },
        breadcrumbLocked: {
            color: grey[300],
        },
        loginLink: {
            cursor: 'pointer',
            color: blue[400],
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        textField: {
            // fontSize: '14px',
            width: '100%',
            backgroundColor: '#fff',
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
