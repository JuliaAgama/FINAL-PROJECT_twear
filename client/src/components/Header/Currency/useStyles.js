import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
                borderRight: '1px solid black',
                padding: '14px 0',
                backgroundColor: 'white'
            },
            padding: '16px 0',
            fontSize: '16px',
            fontWeight: '700',
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'space-around',
            cursor: 'pointer',
        }
    }
));