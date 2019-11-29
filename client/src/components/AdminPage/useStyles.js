import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => (
    {
        root: {
            height: '100vh',
        },
        background: {
            // backgroundImage: 'url("/img/background_AdminPage.jpg")',
            backgroundImage: 'url("/img/background_AdminLoginPage.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            width: '100%',
            minHeight: '100%',
        },
        img: {
            margin: 'auto',
            marginTop: theme.spacing(1),
            display: 'block',
            maxWidth: '40%',
            background: 'radial-gradient(ellipse at center, #ffffff 20%, #ffffff 5%, #ffffff 5%, transparent, transparent)',
        },
        header: {
            paddingTop: theme.spacing(20),
            textAlign: 'center',
            color: theme.palette.secondary.main,
            textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 8px 3px 4px #FFFFFF',
        },
    }
));