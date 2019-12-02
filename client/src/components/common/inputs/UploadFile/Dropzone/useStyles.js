import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            flexGrow: 1,
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: 'rgb(206, 213, 223)',
            height: '170px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
        },
        card: {
            backgroundColor: 'white',
            padding: '15px',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            boxShadow: '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
            boxSizing: 'border-box',
        },
        dropzone: {
            height: '120px',
            width: '120px',
            backgroundColor: '#fff',
            border: '2px dashed rgb(187, 186, 186)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontSize: '14px',
        },
        icon: {
            opacity: '0.3',
            height: '50px',
            width: '50px',
        },
        fileInput: {
            display: 'none',
        },
        highlight: {
            backgroundColor: 'rgb(188, 185, 236)',
        },
    }
));
