import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            },
            padding: '16px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
            backgroundColor: 'white'
        },
        link: {
            display: 'flex',
            // justifyContent: 'start'
        }
    }
));