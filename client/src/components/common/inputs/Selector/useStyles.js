import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper:
        {
            margin: theme.spacing(0),
            width: 350,
            maxWidth: '99%',
        },
        inputField:
        {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
    }
));
