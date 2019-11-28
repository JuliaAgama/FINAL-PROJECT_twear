import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: theme.spacing(5)
        },
        link: {
            textDecoration: 'none',
            color: '#333',
            textTransform: 'capitalize',
        },
    }
));