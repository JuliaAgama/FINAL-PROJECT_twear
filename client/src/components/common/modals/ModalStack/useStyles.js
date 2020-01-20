import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        btnTeam: {
            // position: 'absolute',
            // top: '1px',
            // left: '1px',
            width: '80px',
            height: '16px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            // backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down('sm')]: {
                height: '12px',
                // top: 0,
            },
        },
        title: {
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            },
        },
        container: {
            marginLeft: theme.spacing(3),
        },
        personContainer: {
            // textAlign: 'center',
        },
        personTitle: {
            "&::after": {
                content: '""',
                width: '90%',
                height: '1px',
                backgroundColor: grey[200],
            },
        },
        avatar: {
            width: theme.spacing(7),
            height: theme.spacing(7),
            margin: theme.spacing(1),
            [theme.breakpoints.down('md')]: {
                width: theme.spacing(6),
                height: theme.spacing(6),
            },
            [theme.breakpoints.down('sm')]: {
                width: theme.spacing(7),
                height: theme.spacing(7),
            },
        },
        tasksContainer: {
            fontSize: '22px',
            lineHeight: '1.5',
        },
        listItem: {
            paddingTop: theme.spacing(1),
            paddingBottom: 0,
        }
    }
));
