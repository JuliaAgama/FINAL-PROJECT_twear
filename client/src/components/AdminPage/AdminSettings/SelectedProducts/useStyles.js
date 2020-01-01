import { makeStyles } from '@material-ui/core/styles';
import {grey, pink} from "@material-ui/core/colors";

export default makeStyles(theme => (
    {
        paper: {
            width: '100%',
            marginBottom: theme.spacing(3),
            justifyContent: 'space-between',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
        },
        container: {
            flexGrow: 1,
            justifyContent: 'space-between',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            textAlign: 'center',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        expanded: {
            marginLeft: theme.spacing(1)
        },
        deleteBtn: {
            position: 'absolute',
            bottom: '20px',
            right: '150px',
            cursor: 'pointer',
            color: grey[700],
            '&:hover': {
                color: pink[700],
            },
        },
    }
));
