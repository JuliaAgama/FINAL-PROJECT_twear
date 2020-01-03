import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        btnTeam: {
            position: 'absolute',
            top: '1px',
            left: '1px',
            width: '57px',
            height: '57px',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down('sm')]: {
                width: '57px',
                height: '57px',
            },
            [theme.breakpoints.down('xs')]: {
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                width: '25px',
                height: '25px',
            },
        },
        title: {
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            },
        },
        container: {
            // borderTop: `1px solid ${grey[500]}`,
            // borderLeft: `1px solid ${grey[500]}`,
        },
        personContainer: {
            // borderRight: `1px solid ${grey[500]}`,
            // borderBottom: `1px solid ${grey[500]}`,
            textAlign: 'center',
        },
        personTitle: {
            "&::after": {
                content: '""',
                width: '90%',
                height: '1px',
                backgroundColor: grey[200],
                // borderBottom: `1px solid ${grey[200]}`,
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
            // height: '600px',
            fontSize: '14px',
            lineHeight: '1.2',
        },
        listItem: {
            paddingTop: '3px',
            paddingTop: 0,
            paddingBottom: 0,
            // paddingBottom: theme.spacing(1),
        }
    }
));
