import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        box: {
            padding: '6px 0',
            cursor: 'pointer',
        },
        link: {
            minWidth: '25%',
            color: 'rgba(0, 0, 0, 0.87)',
        },
        mobileLink: {
            minWidth: '50%',
            color: 'rgba(0, 0, 0, 0.87)',
        }
    }
));