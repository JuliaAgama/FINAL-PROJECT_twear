import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            paddingTop: theme.spacing(6),
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.background.paper,
        },
        link: {
            marginLeft: theme.spacing(3),
            textDecoration: 'none',
            color: theme.palette.text.secondary,
            padding: theme.spacing(1)
        },
        btn: {
            width: '2.5rem',
            height: '2.5rem',
            display: 'flex',
            margin: theme.spacing(1),
            border: '1px solid black',
            borderRadius: '3px',
            padding: theme.spacing(1),
            justifyContent: 'center',
            alignContent: 'center',
            outline: 'none!important',
            cursor: 'pointer',
            textTransform: 'none'
        },
    }
));