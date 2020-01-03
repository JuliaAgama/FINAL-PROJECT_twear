import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => (
    {
        gender: {
            fontSize: '2vw',
            color: '#000',
            [theme.breakpoints.down('sm')]: {
                fontSize: '4vw',
            },
        },
        // hiddenLink: {
        //     display: 'none',
        //     textDecoration: 'none',
        //     fontSize: '2vw',
        //     fontWeight: '500',
        //     '&:hover': {
        //         fontWeight: '700',
        //     },
        // },
        // topCatName: {
        //     fontSize: '2vw',
        //     background: 'white',
        //     width: '100%',
        //     textAlign: 'center',
        //     textTransform: 'uppercase',
        //     fontFamily: "Roboto",
        //     color: 'black',
        //     padding: '20px 30px',
        // },
        // categoryItemHome: {
        //     border: '1px solid black',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     filter: 'grayscale(0.5)',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     fontSize: '40px',
        //     textDecoration: 'none',
        //     transition: 'all 1s ease-in',
        //     height: '75vh',
        //     '&:nth-child(n+2)': {
        //         borderLeft: 'none',
        //     },
        //     '&:hover': {
        //         // filter: 'grayscale(0)',
        //         transition: 'all 1s ease',
        //     },
        //     '&:hover .hiddenLink': {
        //         display: 'block',
        //         backgroundColor: 'white',
        //         width: '100%',
        //         textAlign: 'center',
        //         margin: '30px',
        //         textDecoration: 'none',
        //     },
        //     '&:hover .topCatName': {
        //         display: 'none',
        //     },
        // },
    }
));
