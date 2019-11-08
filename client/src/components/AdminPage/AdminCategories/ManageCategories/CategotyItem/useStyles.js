import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            alignItems: 'center',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
            paddingRight: theme.spacing(5)
        }
    }
));