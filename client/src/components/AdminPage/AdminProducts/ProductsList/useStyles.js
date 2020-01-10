import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        inform: {
            color: blue[600],
            textAlign: 'right',
            textTransform: 'lowercase',
            fontStyle: 'italic',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'left',
            }
        },
    }
));
