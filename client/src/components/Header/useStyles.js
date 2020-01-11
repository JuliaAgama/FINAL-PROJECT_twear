import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        headerContainer: {
            // boxSizing: 'border-box',
            // height: '60px',
            display: 'flex',
            // flexWrap: 'wrap',
            // width: '100%',
            padding: '0',
            margin: '0',
            position: 'relative',
        },
        container: {
            // height: '60px',
            // display: 'flex',
            // flexWrap: 'wrap',
            // width: '25%',
            // padding: '0',
            // margin: '0',
            // borderRight: '1px solid #000',
            // borderBottom: '1px solid #000',
        },
        headerItem: {
            boxSizing: 'border-box',
            height: '60px',
            borderRight: '1px solid #000',
            backgroundColor: '#fafafa',
            position: 'sticky',
            top: 0,
            zIndex: '1000',
        },
        headerItemXS: {
            boxSizing: 'border-box',
            height: '60px',
            borderRight: '1px solid #000',
            borderBottom: '1px solid #000',
            backgroundColor: '#fafafa',
            zIndex: '1000',
        },
        genderCatsContainer: {
            position: 'relative',
            borderLeft: '1px solid #000',
            borderRight: '1px solid #000',
            borderBottom: '1px solid #000',
        },
        topBorder: {
            borderTop: '1px solid #000',
        },
        bottomBorder: {
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderBottom: '1px solid #000',
            }
        },
        leftBorder: {
            borderLeft: '1px solid #000',
        },
        sticky: {
            borderTop: '1px solid #000',
            borderBottom: '1px solid #000',
            zIndex: '1001',
        },
        logoContainer: {
            // width: '50%',
            // borderRight: 'none',
            // borderLeft: 'none',
        },
        mainContainerMobile: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            borderTop: '1px solid black',
            position: 'relative',
            height: '60px',
        },
        mobileMenuContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '98%',
            position: 'absolute',
            top: '70px',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
            zIndex: '1010'
        },
        hide: {
            display: 'none'
        }
    }
));