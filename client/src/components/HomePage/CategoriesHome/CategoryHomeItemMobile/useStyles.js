import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    root: {
        border: "1px solid black",
        // backgroundImage: props => props.backgroundImage,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    },
    header: {
        // backgroundColor: "#fff",
        backgroundColor: "#333",
        // backgroundColor: 'rgba(255,255,255,0.5)',
        paddingTop: "10px",
        paddingBottom: "3px",
        textAlign: 'center',
        fontSize: "16px",
        // color: "#000",
        color: "#fff",
        textTransform: 'uppercase',
        textTransform: 'uppercase',
    },
    paper: {
        textAlign: 'center',
        backgroundImage: props => props.backgroundImage,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '22vh',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '30px',
        width: '100%',
        height: '100%',
        // filter: 'grayscale(1)',
        // backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(255,255,255,0.7)',
        // color: '#fff',
        color: '#000',
        // textShadow: '1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px 0px 0 #000, 0px 1px 0 #000, -1px 0px 0 #000, 0px -1px 0 #000',
        textShadow: '1px 1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, -1px -1px 0 #fff, 1px 0px 0 #fff, 0px 1px 0 #fff, -1px 0px 0 #fff, 0px -1px 0 #fff',
        letterSpacing: '2px',
        "&:hover": {
            border: "1px solid black",
            fontSize: '36px',
            textDecoration: 'none',
            // filter: 'grayscale(0)',
            // backgroundColor: 'rgba(255,255,255,0.1)',
            backgroundColor: 'transparent',
            fontWeight: '700',
            color: '#000',
            textShadow: '1px 1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, -1px -1px 0 #fff, 1px 0px 0 #fff, 0px 1px 0 #fff, -1px 0px 0 #fff, 0px -1px 0 #fff',
            // color: '#fff',
            // textShadow: '1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px 0px 0 #000, 0px 1px 0 #000, -1px 0px 0 #000, 0px -1px 0 #000',
            // transition: 'filter 1s ease',
            transition: 'background-color 1s ease',
        },
    },
    btn: {
        margin: "0 auto",
        textAlign: 'center',
        textTransform: 'uppercase',
    },
}));
