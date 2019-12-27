import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        title: {
            textTransform: 'capitalize',
            textAlign: "center",
            fontWeight: '700',
            marginTop: theme.spacing(16),
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
            }
        },
    }
));
