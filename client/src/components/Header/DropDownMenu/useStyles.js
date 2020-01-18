import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            width: '100%',
            minWidth: '0',
            textAlign: 'center',
            padding: '18px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            [theme.breakpoints.down('xs')]: {
                padding: '15px 0',
            }
        },
        hide: {
            display: 'none'
        }
    }
));