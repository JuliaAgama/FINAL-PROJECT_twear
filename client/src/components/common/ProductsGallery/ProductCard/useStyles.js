import { makeStyles } from '@material-ui/core/styles';
import { pink, grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        mainContainer: {
            width: '25%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            },
            borderRight: '1px solid black',
            margin: '0',
            padding: '2%',
        },
        anime: {
            willChange: 'transform, opacity'
        },
        imgContainer: {
            width: '100%',
            height: '100px',
            paddingTop: '150%',
            overflow: 'hidden',
            position: 'relative',
            '&:hover': {
                cursor: 'pointer',
            }
        },
        img: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '100%',
            maxWidth: '100%',
        },
        imgOut: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '100%',
            maxWidth: '100%',
            filter: 'grayscale(1)',
        },
        textContainer: {
            fontWeight: '700',
            textTransform: 'capitalize',
        },
        title: {
            margin: '0',
            paddingTop: '5%'
        },
        titleOut: {
            margin: '0',
            paddingTop: '5%',
            color: grey[400],
        },
        viewOut : {
            color: grey[400],
        },
        value: {
            paddingBottom: '18%',
            margin: '0',
            textTransform: 'uppercase',
        },
        valueOut: {
            paddingBottom: '18%',
            margin: '0',
            textTransform: 'uppercase',
            color: grey[400],
        },
        borderRight: {
            borderRight: 'none'
        },
        link: {
            color: 'inherit',
            textDecoration: 'none',
            '&:hover' : {
                color: pink[700],
            },
        },
    }
));