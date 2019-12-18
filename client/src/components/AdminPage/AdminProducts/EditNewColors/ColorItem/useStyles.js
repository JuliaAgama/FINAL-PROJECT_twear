import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
        },
        container: {
            alignItems: 'center',
        },
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
            padding: theme.spacing(1),
        },
        colored: {
            margin: theme.spacing(1),
            borderTop: props => `10px solid ${props.color}`,
        },
        textField: {
            margin: `${theme.spacing(1)}`,
            width: '98%',
            backgroundColor: '#fff',
        },
    }
));
