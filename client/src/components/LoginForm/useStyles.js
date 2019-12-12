import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingBottom: '20px',
            position: 'relative'
        },
        form: {
            width: '400px',
            [theme.breakpoints.down('sm')]: {
                width: '250px',
            },
        },
        hide: {
            display: 'none'
        },
        btn: {
            borderRadius: '18px',
            margin: '45px 0',
            outline: 'none!important',
        },
        link: {
            color: 'black',
        },
        linkContainer: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
        },
        spinnerContainer: {
            position: 'absolute',
            left: 'calc(50% - 50px)',
            top: 'calc(50% - 35px)',
            [theme.breakpoints.down('sm')]: {
                left: 'calc(50% - 35px)',
            },
        }
    }
));