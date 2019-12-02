import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (
    {

        border: {
            border: '1px solid black',  
        },

        borderNoBottom: {
            borderLeft: '1px solid black',  
            borderTop: '1px solid black',  
            borderRight: '1px solid black'  
        },

        pl10: {
            paddingLeft: '10px'
        },

        flexMid: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },

        signupSize: {
            height: "158.531px", 
            padding: "20px"
        }
    }
));

export default useStyles