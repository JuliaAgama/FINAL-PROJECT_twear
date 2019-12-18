import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => (
    {
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
        },
        bottomDivider: {
            borderBottom: '1px solid #999',
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        input: {
            paddingTop: theme.spacing(1),
            paddingTBottom: theme.spacing(1),
        },
        textField: {
            margin: `${theme.spacing(1)} auto`,
            width: '100%',
            backgroundColor: '#fff',
        },
        container: {
            alignItems: 'center',
        },
        btn: {
            display: 'block',
            width: '25%',
            margin: '0 auto',
            marginTop: theme.spacing(2),
            borderRadius: '18px',
            outline: 'none!important',
            textDecoration: 'none!important',
        },
    }
));
