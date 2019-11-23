import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            position: 'absolute',
            width: 400,
            color: red[700],
            backgroundColor: red[100],
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }
));