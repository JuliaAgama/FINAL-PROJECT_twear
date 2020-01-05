import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        title: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontWeight: '700',
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            }
        },
        mainContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            marginBottom: '20px',
            border: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                borderRight: 'none',
                borderLeft: 'none',
            },
        },
    }
));