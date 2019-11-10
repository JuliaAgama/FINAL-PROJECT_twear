import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        searchContainer: {
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
            textAlign: 'left',
            padding: '8px 12px'
        },
        input: {
            marginLeft: '10px',
            width: 'calc(100% - 45px)'
        }
    }
));