import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
            marginBottom: theme.spacing(2)
        },
        textField: {
            margin: `${theme.spacing(1)} auto`,
            width: '100%',
            backgroundColor: '#fff',
        },
        justify: {
            width: '100%'
        },
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
            paddingRight: theme.spacing(3)
        },
        formControl: {
            margin: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        displayNone: {
            display: 'none',
        },
        displayBlock: {
            display: 'block',
        },
    }
));