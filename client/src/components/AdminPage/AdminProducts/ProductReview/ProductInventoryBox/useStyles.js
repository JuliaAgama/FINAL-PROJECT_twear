import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        saveBtn: {
            display: 'block',
            width: '100px',
            marginLeft: theme.spacing(2),
            borderRadius: '18px',
            outline: 'none!important',
            textDecoration: 'none!important',
        },
        paper: {
            alignItems: 'flex-start',
            borderLeft: '1px solid #666',
            textAlign: 'center',
            marginTop: theme.spacing(2),
        },
        header: {
            textTransform: 'capitalize',
            boxSizing: 'border-box',
            height: '60px',
            borderTop: '1px solid #666',
            borderBottom: '2px solid #666',
            borderRight: '1px solid #666',
            padding: theme.spacing(1),
            minWidth: '60px',
        },
        rowTitle: {
            textTransform: 'capitalize',
            borderBottom: '1px solid #333',
            borderRight: '1px solid #333',
            textTransform: 'uppercase',
            height: '50px',
        },
        input: {
            width: '50px',
        },
    }
));
