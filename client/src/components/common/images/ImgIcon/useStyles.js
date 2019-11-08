import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        imageBox: {
            height: theme.spacing(10),
            overflow: 'hidden'
        },
        image: {
            width: '80%',
            objectFit: 'cover',
        }
    }
));