import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        img: {
            width: '136px',
            [theme.breakpoints.down('sm')]: {
                width: '105px',
            },
        },
        btn: {
            padding: '0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                width: 'calc(100% - 100px)',
                borderRight: '1px solid black',
                borderLeft: '1px solid black'
            },
        }
    }
));