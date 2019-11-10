import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            height: '100vh',
        },
        mainContainer: {
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '14px',
            marginTop: '40px'
        },
        bottomBlock: {
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
        }
    }
));