import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        link: {
            width: '100%',
            textDecoration: 'none',
            color: '#333',
            textTransform: 'capitalize',
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
            marginRight: theme.spacing(2),
            textTransform: 'capitalize',
        },
        art: {
            color: 'green',
        },
    }
));
