import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
    colored: {
        margin: theme.spacing(1), 
        borderTop: props => `10px solid ${props.color}`,
        // backgroundColor: props => props.color,
        },
    }
));
