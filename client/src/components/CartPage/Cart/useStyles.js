import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles(theme => (
    {
        cartEmpty: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            paddingBottom: theme.spacing(3),
            color: grey[500],
            textAlign: 'center',
        },
        cart: {
            borderTop: '1px solid #000',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            paddingBottom: theme.spacing(3),
        },
        skuContainer: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    }
));
