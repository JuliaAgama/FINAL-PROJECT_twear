import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            width: '25%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            },
            borderRight: '1px solid black',
            margin: '0',
            padding: '2%',
        }
    }
));