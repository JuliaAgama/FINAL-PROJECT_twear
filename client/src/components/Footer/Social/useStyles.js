import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => (
    {

        flexMid: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        flexBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center'
        },
        link: {
            display: 'block',
            fontSize: '14px',
            color: '#000',
            textDecoration: 'none',
            paddingRight: theme.spacing(3),
            '&:hover': {
                textDecoration: 'none',
                color: grey[700]
            },
        },
        linkXS: {
            fontSize: '14px',
            color: '#000',
            textDecoration: 'none',
            paddingRight: theme.spacing(4),
            '&:hover': {
                textDecoration: 'none',
                color: grey[700]
            },
        },
    }
));

export default useStyles