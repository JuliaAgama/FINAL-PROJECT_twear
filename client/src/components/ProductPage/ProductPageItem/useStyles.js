import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            width: '100%',
            padding: '0',
            marginTop: '120px',
            marginBottom: '60px',
            border: '1px solid black',
        },
        container : {
            width: '50%',
            borderLeft: '1px solid black',
            padding: '50px 30px',
            margin: '0',
        },
        imgContainer : {
            width: '50%',
            padding: '0',
            margin: '0',
            overflow: 'hidden'
        },
        imgScale: {
            width: '100%',
            padding: '0',
            margin: '0',
            transition: '0.5s',
            "&:hover": {
                transform: 'scale(1.9)',
                cursor: 'pointer'
            },
        },
        img: {
            "&:hover": {
                transform: 'scale(1.2)',
            },
        },
        productName: {
            fontSize: '25px',
            fontWeight: '700',
            textTransform: 'capitalize',
            margin: '0'
        },
        productPrice: {
            fontSize: '18px',
            fontWeight: '700',
            textTransform: 'uppercase',
            margin: '8px 0'
        }
    }
));

