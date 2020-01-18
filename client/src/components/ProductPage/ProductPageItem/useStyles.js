import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            width: '100%',
            padding: '0',
            marginTop: '120px',
            marginBottom: '60px',
            border: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                marginTop: '59px',
            },
        },
        container : {
            width: '50%',
            borderLeft: '1px solid black',
            padding: '30px 20px',
            margin: '0',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                borderLeft: 'none',
            }
        },
        mobileContainer: {
            width: '100%',
            borderLeft: 'none',
            padding: '30px 20px 0 20px',
            margin: '0',
        },
        imgContainer : {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
            padding: '0',
            margin: '0',
            overflow: 'hidden'
        },
        imgScale: {
            width: '100%',
            padding: '0',
            margin: '0',
            // transition: '0.5s',
            // "&:hover": {
            //     transform: 'scale(1.9)',
            //     cursor: 'pointer'
            // },
        },
        productName: {
            fontSize: '25px',
            fontWeight: '700',
            textTransform: 'capitalize',
            margin: '0'
        },
        productPrice: {
            fontSize: '18px',
            fontWeight: '700',
            textTransform: 'uppercase',
            margin: '8px 0 20px'
        },
        option: {
            fontWeight: '600',
            // marginRight: '50px'
        },
        btn: {
            margin: '30px 0'
        },
        addInfo: {
            display: 'flex',
            width: '100%',
            padding: '0',
            justifyContent: 'space-between',
            fontSize: '14px',
            fontWeight: '700'
        },
        delivery: {
            textDecoration: 'underline',
            margin: '0'
        },
        details: {
            margin: '0'
        },
        filter: {
            display: 'flex',
            justifyContent: 'space-between',
            padding:'0'
        }
    }
));