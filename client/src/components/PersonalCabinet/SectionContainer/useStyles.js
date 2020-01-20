import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            width: '100%',
            padding: '0'
        },
        container: {
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                border: 'none'
            },
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            padding: '0'
        },
        title: {
            borderBottom: '1px solid black',
            padding: '0 15px'
        },
        body: {
            textAlign: 'center',
            margin: '0'
        },
        addInfo: {
            fontSize: '12px'
        },
        bodyTextEmpty: {
            margin: '0'
        }
    }
));