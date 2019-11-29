import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        layoutContainer: {
            width: '100%',
            padding: '4%',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',

        },
        footer: {
            flex: '0 0 auto'
        },
        header: {
            flex: '1 0 auto'
        }
    }
));