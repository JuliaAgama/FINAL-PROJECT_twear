import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        title: {
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '2.25rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
            },
            marginBottom: '20px'
        }
    }
));