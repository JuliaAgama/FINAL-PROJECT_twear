import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        brandSM: {
            fontSize: '20px',
            fontWeight: '700',
            padding: '10px 0',
        },
        menu: {
            borderRight: '1px solid black',
            width: '48px',
            padding: '12px 0',
        },
        bagSM: {
            borderLeft: '1px solid black',
            width: '48px',
            padding: '12px 0',
        },

        container: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0',
            border: '1px solid black',
            marginTop: '-20px'
        },
        img: {
            width: '80px'
        },
        hide: {
            display: 'none'
        }
    }
));