import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        itemContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0'
        },
        btn: {
            borderRadius: '25px',
            padding: '0 8px',
            margin: '8px',
            minWidth: '220px'
        }
    }
));