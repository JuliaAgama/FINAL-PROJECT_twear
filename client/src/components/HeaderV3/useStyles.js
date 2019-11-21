import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '0',
            marginTop: '40px'
        },
        mainBtn: {
            padding: '16px 0',
            borderRadius: '0',
            outline: 'none!important',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '700',
            border: '1px solid black'
        },
        btn25: {
            width: '25%'
        },
        btn50: {
            width: '50%',
            border: 'none',
            borderTop: '1px solid black',
        },
        topBorder: {
            borderTop: 'none'
        },
        rightBorder: {
            borderRight: 'none'
        }
    }
));