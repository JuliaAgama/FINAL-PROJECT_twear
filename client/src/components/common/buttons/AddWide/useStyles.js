import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        fab:{
            margin: theme.spacing(1),
            textAlign: 'center',
        },
        fabBlue: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: blue[600],
            backgroundColor: 'transparent',
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: blue[500],
            },
        },
        fabGreen: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: green[600],
            backgroundColor: 'transparent',
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: green[500],
            },
        },
        fabPink: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: pink[600],
            backgroundColor: 'transparent',
            '&:hover': {
                color: theme.palette.common.white,
                backgroundColor: pink[500],
            },
        },
        fabGrey: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: grey[600],
            backgroundColor: 'transparent',
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