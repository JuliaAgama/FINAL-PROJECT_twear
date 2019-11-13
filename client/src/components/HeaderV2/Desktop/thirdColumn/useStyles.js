import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '0',
            border: '1px solid black',
            borderBottom: 'none',
        },
        btn: {
            width: '100%',
            padding: '16px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black'
        }
    }
));