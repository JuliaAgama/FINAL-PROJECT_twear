import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        productName: {
            fontSize: '25px',
            fontWeight: '700',
            textTransform: 'capitalize',
            margin: '0'
        },
        productPrice: {
            fontSize: '18px',
            fontWeight: '700',
            textTransform: 'uppercase',
            margin: '8px 0 20px'
        }
    }
));

