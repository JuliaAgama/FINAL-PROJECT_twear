import { makeStyles } from '@material-ui/core/styles';
import { green, blue, pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        fab:{
            margin: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: theme.palette.common.white,
        },
        fabBlue: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: blue[600],
            backgroundColor: theme.palette.common.white,
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: blue[500],
            },
        },
        fabGreen: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: green[600],
            backgroundColor: theme.palette.common.white,
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: green[500],
            },
        },
        fabPink: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: pink[600],
            backgroundColor: theme.palette.common.white,
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: pink[500],
            },
        },
        fabGrey: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: grey[600],
            backgroundColor: theme.palette.common.white,
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: grey[500],
            },
        },
        widedIcon: {
            marginRight: theme.spacing(1),
    },
        text: {
            textAlign: 'center',
            "&:hover": {
                textDecoration: 'none !important'
            }
        }
    }
));