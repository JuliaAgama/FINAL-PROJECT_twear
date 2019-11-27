import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            paddingBottom: '20px',
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
        }
    }
));