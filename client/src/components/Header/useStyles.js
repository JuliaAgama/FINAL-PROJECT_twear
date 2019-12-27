import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            boxSizing: 'border-box',
            height: '60px',
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            position: 'relative',
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
            borderTop: '1px solid black',
            position: 'relative'
        },
        mobileMenuContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            position: 'absolute',
            top: '60px',
            // top: '100px',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
            zIndex: '100'
        },
        hide: {
            display: 'none'
        }
    }
));