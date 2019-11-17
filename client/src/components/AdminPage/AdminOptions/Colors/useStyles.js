import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: props => ({
            backgroundColor: props.backgroundColor,
            color: theme.color,
        }),
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
        },
        textField: {
            marginRight: theme.spacing(2),
            backgroundColor: '#fff',
        },
        justify: {
            width: '100%'
        },
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            paddingRight: theme.spacing(3)
        },
        verticalCenter: {
            alignItems: 'center',
            paddingRight: theme.spacing(3),
            justifyContent: 'center',
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