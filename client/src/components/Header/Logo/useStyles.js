import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        img: {
            width: '115px',
            [theme.breakpoints.down('sm')]: {
                width: '105px',
            },
            marginTop: '6px'
        },
        container: {
            position: 'relative',
            boxSizing: 'border-box',
            height: '100%',
            // borderBottom: '1px solid black',
            textAlign: 'center',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '5px',
                // width: 'calc(100% - 100px)',
                // borderRight: '1px solid black',
                // borderLeft: '1px solid black'
            },
        }
    }
));