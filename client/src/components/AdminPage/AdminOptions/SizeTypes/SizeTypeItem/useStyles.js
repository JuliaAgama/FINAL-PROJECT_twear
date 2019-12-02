import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            margin: 'auto',
            maxWidth: '100%',
            margin: `${theme.spacing(2)} auto`,
            borderTop: `solid 1px #666666`,
            textTransform: 'capitalize',
        },
        container: {
            flexGrow: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-around',
        },
        textField: {
            backgroundColor: '#ccc',
            marginLeft: theme.spacing(1),
            paddingLeft: theme.spacing(1),
        },
    }
));
