import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            position: 'relative',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
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
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(1),
            textTransform: 'capitalize',
        },
        art: {
            color: 'green',
        }
    }
));
