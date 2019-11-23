import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: props => ({
            backgroundColor: props.backgroundColor,
            color: theme.color,
        }),
        wrapper: {
            margin: `${theme.spacing(1)} auto`,
            // paddingBottom: theme.spacing(5)
        },
        textField: {
            // marginRight: theme.spacing(2),
            backgroundColor: '#fff',
        },
        justify: {
            width: '100%'
        },
        colorInput: {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(-2)
        },
        paper: {
            flexGrow: 1,
            alignItems: 'flex-start',
            textTransform: 'capitalize',
            padding: theme.spacing(1)
        },
        verticalCenter: {
            alignItems: 'center',
            paddingRight: theme.spacing(3),
            justifyContent: 'space-around',
        },
        center: {
            textAlign: 'center',
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