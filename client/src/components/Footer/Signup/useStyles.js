import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        container: {
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
        },
        paper: {
            height: '56px',
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
        input: {
            padding: theme.spacing(1),
            fontSize: '14px',
        },
        paperBtn: {
            height: '56px',
            cursor: 'pointer',
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            textTransform: 'uppercase',
            '&:hover': {
                backgroundColor: grey[200],
            },
        },
    }
));
