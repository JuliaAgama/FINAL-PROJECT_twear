import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        },
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
        link: {
            margin: '14px 20px'
        }
    }
));