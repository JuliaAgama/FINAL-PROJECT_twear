import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        img: {
            width: '115px',
            [theme.breakpoints.down('sm')]: {
                width: '105px',
            },
            marginTop: '10px'
        },
        container: {
            textAlign: 'center',
            cursor: 'pointer',
            padding: '0'
        }
    }
));