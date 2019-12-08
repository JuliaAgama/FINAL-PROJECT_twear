import { makeStyles } from '@material-ui/core/styles';

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
        textContainer: {
            fontWeight: '700'
        },
        title: {
            margin: '0',
            paddingTop: '5%'
        },
        value: {
            paddingBottom: '18%',
            margin: '0',
        },
        borderRight: {
            borderRight: 'none'
        }
    }
));