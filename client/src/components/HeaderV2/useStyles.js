import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        headerItem: {
            position: 'sticky',
            top: 0,
            zIndex: '1000',
        },
        dropSubMenuItem : {
            position: 'sticky',
            top: 60,
            zIndex: '1000',
        },
        dropSubMenuItemMobile : {
            position: 'sticky',
            top: 239,
            [theme.breakpoints.down('xs')]: {
                top: 227,
            },
            zIndex: '1000',
        },
        mobileHeaderItem: {
            position: 'sticky',
            top: 10,
            zIndex: '1000',
        },
        mobileMenuItem: {
            position: 'sticky',
            top: 66,
            [theme.breakpoints.down('sm')]: {
                top: 72,
            },
            [theme.breakpoints.down('xs')]: {
                top: 66,
            },
            zIndex: '1000',
        },
        sticky: {
            zIndex: '1001',
            backgroundColor: '#fafafa',
        },
        search: {
            width: '25%',
            padding: '0',
            border: '1px solid black',
            borderRight: 'none',
            lineHeight: '0%',
        },
        logo: {
            width: '50%',
            padding: '0',
            margin: '0',
            lineHeight: '0%',
            border: '1px solid black',
            borderBottom: 'none',
        },
        cart: {
            width: '25%',
            padding: '0',
            textAlign: 'center',
            border: '1px solid black',
            borderLeft: 'none',
            lineHeight: '0%',
        },
        currency: {
            width: '25%',
            padding: '0',
            borderBottom: '1px solid black',
            borderLeft: '1px solid black',

        },
        women: {
            width: '25%',
            padding: '0',
            border: '1px solid black',
        },
        men: {
            width: '25%',
            padding: '0',
            border: '1px solid black',
            borderLeft: 'none'
        },
        login: {
            width: '25%',
            padding: '0',
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
        },
        dropSubMenu: {
            padding: "0"
        },
        dropMenu: {
            width: '60px',
            padding: '0',
            border: '1px solid black',
            borderRight: 'none',
            [theme.breakpoints.down('xs')]: {
                width: '55px',
            }
        },
        mobileLogo: {
            width: 'calc(100% - 120px)',
            [theme.breakpoints.down('xs')]: {
                width: 'calc(100% - 110px)',
            },
            padding: '0',
            border: '1px solid black',
        },
        mobileCart: {
            width: '60px',
            padding: '0',
            textAlign: 'center',
            border: '1px solid black',
            borderLeft: 'none',
            [theme.breakpoints.down('xs')]: {
                width: '55px',
            }
        },
        mobileSearch: {
            width: '100%',
            padding: '0',
            border: '1px solid black',
            borderTop: 'none'
        },
        mobileDropMenu: {
            padding: '0',
            display: 'flex',
            flexWrap: 'wrap'
        },
        mobileMenuItemContainer : {
            width: '50%',
            padding: '0',
            border: '1px solid black',
            borderTop: 'none'
        },
        borderLeft: {
            borderLeft: 'none'
        }
    }
));