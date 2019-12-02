import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (
    {
        bold: {
            fontWeight: '700'
        },

        borderBotTop: {
            borderTop: '1px solid black',
            borderBottom: "1px solid black"
        },

        pl10: {
            paddingLeft: '10px'
        },

        flexToBot14px: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
        },

        subHeader: {
            fontSize: '16px',
            fontWeight: 700
        }
    }
));

export default useStyles