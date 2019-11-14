import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        border: {
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '0',
            width: '100%',
            borderRight: '1px solid black',
        },
        hide: {
            display: 'none'
        },
        btn: {
            width: '50%',
            padding: '10px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
            borderLeft: '1px solid black',
        }
    }
));