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
            height: '150px',
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
        imgContainer: {
            width: '99%',
            height: '99%',
            overflow: 'hidden',
        },
        img: {
            objectFit: 'cover',
            maxHeight: '100%',
        },
        textField: {
            margin: `${theme.spacing(1)}`,
            width: '98%',
            backgroundColor: '#fff',
        },
    }
));
