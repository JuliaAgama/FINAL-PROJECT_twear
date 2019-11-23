import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            width: '100%',
            padding: '16px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black'
        },
        btnSearch: {
            padding: '14px 0 14px 14px',
            justifyContent: 'left',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: '9px 0 9px 13px',
                borderRadius: '0',
                outline: 'none!important',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: '700',
                justifyContent: 'start',
                border: '1px solid black',
                borderTop: 'none'
            },
        },
        input: {
            maxWidth: '85%',
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '10px'
            },
        }
    }
));