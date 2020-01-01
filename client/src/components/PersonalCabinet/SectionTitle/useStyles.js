import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
            padding: '0',
            textAlign: 'center'
        },
        title: {
            margin: '14px 0'
        },
        mainTitle: {
            fontWeight: '700',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '14px'
            }
        },
        border : {
            borderBottom: 'none',
            [theme.breakpoints.down('sm')]: {
                borderTop: 'none',
            },
        }
    }
));