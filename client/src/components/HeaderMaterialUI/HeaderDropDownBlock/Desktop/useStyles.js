import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        border: {
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '15px 0',
            width: '100%'
        }
    }
));