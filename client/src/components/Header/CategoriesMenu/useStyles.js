import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            width: '50%',
            padding: '16px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                padding: '16px 1px',
            },
            backgroundColor: 'white'
        },
        btnBorder: {
            borderRight: '1px solid black'
        }
    }
));