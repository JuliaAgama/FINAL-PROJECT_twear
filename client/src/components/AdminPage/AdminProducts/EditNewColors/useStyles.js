import { makeStyles } from '@material-ui/core/styles';
import { pink, green } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
        },
        linkGreen: {
        display: 'inline-block',
        textDecoration: 'none!important',
        textTransform: 'uppercase',
        marginTop: theme.spacing(3),
        color: '#000000',
        "&:hover": {
            color: green[600],
            textDecoration: 'underline',
        },
    },
        linkPink: {
            display: 'inline-block',
            textDecoration: 'none!important',
            textTransform: 'uppercase',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(5),
            color: '#000000',
            "&:hover": {
                color: pink[600],
                textDecoration: 'underline',
            },
        },
        btn: {
            display: 'block',
            width: '25%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
            borderRadius: '18px',
            outline: 'none!important',
            textDecoration: 'none!important',
        },
    }
));
