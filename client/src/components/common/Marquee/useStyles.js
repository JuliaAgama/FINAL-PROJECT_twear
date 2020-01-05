import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        container: {
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            [theme.breakpoints.down('md')]: {
            },
            [theme.breakpoints.down('sm')]: {
            },
            [theme.breakpoints.down('xs')]: {
            },
        },
        text: {
            color: '#000',
            fontSize: '25px',
            display: 'inline-block',
            paddingLeft: '10%',
            '-webkit-animation': 'marquee 10s infinite linear',
            animation: 'marquee 10s infinite linear',
            [theme.breakpoints.down('md')]: {
            },
            [theme.breakpoints.down('sm')]: {
            },
            [theme.breakpoints.down('xs')]: {
            },
        },
    }
));
