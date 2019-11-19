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
            width: '50.15%',
            justifyContent: 'center',
            border: '1px solid black',
            borderTop: 'none',
            paddingBottom: '20px',
        },
        form: {
            width: '400px',
        },
        hide: {
            display: 'none'
        },
        btn: {
            borderRadius: '18px',
            margin: '20px 0',
            outline: 'none!important',
        },
        linkPass: {
            color: 'black',
            marginRight: '80px',
        },
        linkReg: {
            color: 'black'
        }
    }
));