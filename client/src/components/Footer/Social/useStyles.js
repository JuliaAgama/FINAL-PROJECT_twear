import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (
    {

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