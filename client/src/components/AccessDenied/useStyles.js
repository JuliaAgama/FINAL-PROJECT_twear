import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            display: 'flex',
            padding: '0',
            margin: '0',
            position: 'relative',
            justifyContent: 'center',
            width: '100%',
            height: '100vh'
        },
        link: {
            position: 'absolute',
            bottom: '40px',
            fontSize: '25px'
        },
        img: {
            width: '100%'
        }
    }
));