import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            margin: 'auto',
            maxWidth: '100%',
        },
        container: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        image: {
            width: 50,
            height: 40,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        title: {
            marginLeft: theme.spacing(2),
            textTransform: 'capitalize',
        },
    }
));