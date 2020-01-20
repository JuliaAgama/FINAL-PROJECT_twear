import { makeStyles } from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors";

export default makeStyles(theme => (
    {
        container: {
            width: '100%',
            display: 'flex',
            padding: '0',
            margin: '0'
        },
        btn: {
            borderRadius: '25px',
            padding: '0 8px',
            margin: '8px',
            minWidth: '163px',
            fontSize: '10px'
        },
        tableRows : {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
        }
    }
));