import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        formControl: {
            marginBottom: '8px',
            minWidth: 120,
            marginTop: '-20px'
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        main: {
            display: 'flex',
            padding: '0',
            justifyContent: 'flex-end',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'space-between',
            },
        },
        hide: {
            display: 'none'
        }
    }
));