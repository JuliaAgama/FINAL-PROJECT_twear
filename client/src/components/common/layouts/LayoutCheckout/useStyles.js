import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        layoutContainer: {
            paddingLeft: '1%',
            paddingRight: '1%',
            position: 'relative',
        },
        root: {
            padding: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(1),
            }
        },
        logo: {
            width: '8rem',
            marginBottom: theme.spacing(2),
        },
        image: {
            maxWidth: '100%',
        },
        containerSummary: {
            backgroundColor:  '#fff',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            borderTop: `1px solid ${grey[300]}`,
            borderBottom: `1px solid ${grey[300]}`,
            marginBottom: theme.spacing(2),
        },
        expand: {
            transform: 'rotate(90deg)',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            textAlign: 'center',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(270deg)',
        },
        expanded: {
            marginLeft: theme.spacing(5)
        },
        paper: {
            padding: theme.spacing(2),
            background: '#fff',
            minHeight: '100vh',
            color: grey[600],
            [theme.breakpoints.down('sm')]: {
                minHeight: 0,
                padding: theme.spacing(1),
                borderTop: `1px solid ${grey[300]}`,
                borderBottom: `1px solid ${grey[300]}`,
            }
        },
        footer: {
            display: 'block',
            width: '100%',
            borderTop: `1px solid ${grey[300]}`,
            color: grey[700],
        }
    }
));
