import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        box: {
            padding: '20px 0',
            cursor: 'pointer'
        },
        brand: {
            border: '1px solid black',
            fontSize: '20px',
            padding: '13px 0',
        },
        searchIcon: {
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
            padding: '15px 0 15px 18px',
            textAlign: 'left',
        },
        bag: {
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            borderRight: '1px solid black',
        },
        img: {
            width: '100px'
        },
        input: {
            width: '85%'
        },
        icon: {
            cursor:'pointer'
        },
        searchTitle: {
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
        },
        hide: {
            display: 'none'
        }
    }
));