import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btnQR: {
            position: 'absolute',
            top: '1px',
            left: '1px',
            width: '57px',
            height: '57px',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down('sm')]: {
                width: '57px',
                height: '57px',
            },
            [theme.breakpoints.down('xs')]: {
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                width: '25px',
                height: '25px',
            },
        },
        title: {
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            },
        },
        personContainer: {
            // borderBottom: '1px solid #000',
        },
        photo: {
            height: '20vh',
            width: '20vh',
            // margin: '0 auto',
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            // backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down('sm')]: {
                height: '15vh',
                width: '15vh',
                // width: '300px',
                // height: '300px',
            },
            [theme.breakpoints.down('xs')]: {
                // height: '20vh',
                // width: '20vh',
                // marginTop: theme.spacing(2),
                // width: '200px',
                // height: '200px',
            },
        },
    }
));
