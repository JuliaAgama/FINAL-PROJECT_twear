import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (
    {
        
        border: {
            border: '1px solid black',
            boxSizing: 'border-box'
        },

        borderNoTop: {
            border: '1px solid black',
            borderTop: '0px'
        },

        flexMid: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },

        flexBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center'
        }
    }
));

export default useStyles