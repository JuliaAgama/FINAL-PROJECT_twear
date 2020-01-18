import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        imgContainer : {
            width: '50%',
            padding: '0',
            margin: '0',
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        imgScale: {
            width: '100%',
            padding: '0',
            margin: '0',
            transition: 'all 1s ease-out',
            // "&:hover": {
            //     transform: 'scale(1.9)',
            //     cursor: 'pointer'
            // },
        }
    }
));