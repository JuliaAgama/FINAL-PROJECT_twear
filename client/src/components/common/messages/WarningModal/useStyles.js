import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        paper: {
            position: 'absolute',
            width: 400,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            color: orange[700],
            backgroundColor: orange[100],
        },
    }
));