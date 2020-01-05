import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {Container, Hidden, Box} from "@material-ui/core";
import useStyles from "./useStyles";

import Marquee from "../../Marquee";


export default function CategoryLink(props) {

    const {borderRight, categoryLink, categoryName, borderBottom} = props;
    const [isHover, setIsHover] = useState(false);

    const handleOnHover = event => {
        event.preventDefault();
        setIsHover(!isHover);
    };

    console.log( 'isHover: ', isHover);
    const selectedLinks = {
        styles: {
            container: {
                margin: '0 5px',
                width: '98%',
            },
            text: {
                color: '#000',
                fontSize: '1.25rem',
                textTransform: 'uppercase',
                WebkitAnimation: 'marquee 30s infinite linear',
                animation: 'marquee 30s infinite linear'
            }
        }
    };


    const classes = useStyles();

    return (
        <Box className={ borderRight ? classes.container :
        //<Container maxWidth={false} className={ borderRight ? classes.container :
                !borderRight && borderBottom ?
                `${classes.container} ${classes.borderBottom} ${classes.borderRight}` :
                `${classes.container} ${classes.borderRight}`}>
            <Link to={categoryLink}  className={classes.link} onMouseEnter={handleOnHover} onMouseLeave={handleOnHover}>
                <Hidden mdUp>
                    <span className={classes.link}>{categoryName}</span>
                </Hidden>
                <Hidden smDown>
                    {isHover ?
                    <span className={classes.link}>
                        <Marquee text={` ... ${categoryName} ... ${categoryName} ... ${categoryName} ${categoryName} ${categoryName} ... `} styles={selectedLinks.styles}/>
                    </span> :
                    <span className={classes.link}>{categoryName}</span>
                    }
                </Hidden>
            </Link>
        {/* </Container> */}
        </Box>
    );
}
