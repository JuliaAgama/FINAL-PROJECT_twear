import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btnQR: {
            position: 'absolute',
            top: '1px',
            right: '1px',
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
                right: '10px',
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
        imageQR: {
            width: '400px',
            height: '400px',
            margin: '0 auto',
            marginBottom: theme.spacing(2),
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.down('sm')]: {
                width: '300px',
                height: '300px',
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: theme.spacing(2),
                width: '200px',
                height: '200px',
            },
        },
    }
));
