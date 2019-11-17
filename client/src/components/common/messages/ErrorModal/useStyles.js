import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.error.light,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }
));