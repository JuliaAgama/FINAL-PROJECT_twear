import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        mainContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0',
            margin: '20px 0',
            border: '1px solid black',
            [theme.breakpoints.down('sm')]: {
                borderRight: 'none',
                borderLeft: 'none',
            },
        },
    }
));