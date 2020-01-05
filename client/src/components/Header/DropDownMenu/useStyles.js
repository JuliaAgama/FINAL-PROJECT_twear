import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            width: '100%',
            // width: '50px',
            minWidth: '0',
            textAlign: 'center',
            padding: '15px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            // borderBottom: '1px solid black',
            // borderLeft: '1px solid black'
        },
        hide: {
            display: 'none'
        }
    }
));