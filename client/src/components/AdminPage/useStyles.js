import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: 'url("/img/background_AdminPage.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            width: '100%',
            minHeight: '100%',
        },
        header: {
            paddingTop: '1rem',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
    }
));