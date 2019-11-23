import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            padding: '5%',
            [theme.breakpoints.down('sm')]: {
                padding: '3%',
            },
        }
    }
));