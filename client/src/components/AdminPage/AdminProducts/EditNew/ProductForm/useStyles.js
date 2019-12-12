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
        formControl: {
            margin: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        container: {
            alignItems: 'center',
        },
        imgItem: {
            height: '150px',
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
            padding: theme.spacing(1),
        },
        imgContainer: {
            width: '99%',
            height: '99%',
            overflow: 'hidden',
        },
        img: {
            objectFit: 'cover',
            maxHeight: '100%',
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
