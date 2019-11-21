import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            marginTop: '40px',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '25%',
            padding: '0',
            margin: '0',
            border: '1px solid black',
            borderBottom: 'none',
        },
        logoContainer: {
            width: '50%',
            borderRight: 'none',
            borderLeft: 'none',
        },
        mainContainerMobile: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            marginTop: '40px',
            border: '1px solid black',
        },
    }
));