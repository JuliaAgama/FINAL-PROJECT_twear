import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        btn: {
            borderLeft: '1px solid black',
            width: '100%',
            borderRadius: '0',
            padding: '17px 0',
            fontWeight: '700',
            fontSize: '16px',
            textTransform:'inherit'
        },
        menu: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '15px 0',
            width: '100%',
            border: '1px solid black',
        }
    }
));