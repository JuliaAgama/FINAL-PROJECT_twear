import { makeStyles } from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors";

export default makeStyles(theme => (
    {
        container: {
            width: '100%',
            display: 'flex',
            padding: '0',
            margin: '0'
        },
        btn: {
            borderRadius: '25px',
            padding: '0 8px',
            margin: '8px',
            minWidth: '163px',
            fontSize: '10px'
        },
        tableRows : {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: grey[200],
            },
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        productsContainer: {
            paddingLeft: theme.spacing(2),
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(2, 0, 3),
            },
        },
        orderTitle : {
            width: '800px',
            fontSize: '16px',
            fontWeight: '700',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                width: '320px',
            },
        }
    }
));