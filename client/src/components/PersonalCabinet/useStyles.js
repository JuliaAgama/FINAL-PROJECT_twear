import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            width: '100%',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            padding: '0',
            marginTop: '60px',
            [theme.breakpoints.down('sm')]: {
                marginTop: '-14px',
            },
        }
    }
));