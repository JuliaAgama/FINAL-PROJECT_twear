import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            border: '1px solid black',
        },
        img: {
            width: '130px',
        },
        btn: {
            width: '100%',
            minWidth: '0',
            padding: '12px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black'
        },
        smallBtn: {
            width: '50px',
        },
        bigBtn: {
            width: 'calc(100% - 100px)',
            padding: '0',
            borderRight: '1px solid black',
            borderLeft: '1px solid black'
        },
        btnSearch: {
            width: '100%',
            padding: '9px 0 9px 13px',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            justifyContent: 'start'
        },
        input: {
            paddingLeft: '10px'
        }
    }
));