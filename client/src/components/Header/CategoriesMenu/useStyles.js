import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        containerBorder: {
            borderRight: '1px solid black'
        },
        container : {
            width: '50%',
            padding: '16px',
            [theme.breakpoints.down('sm')]: {
                padding: '15px 0',
                backgroundColor: 'white'
            },
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
        },
    }
));