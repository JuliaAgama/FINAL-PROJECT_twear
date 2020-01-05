import React from 'react';
import {Box} from "@material-ui/core";
import Marquee from "../Marquee";

export default () => {

    const selectedAnnouncement = {
        texts: [
            "free shipping above 1000 euro",
            'quick pay with paypal',
            "free shipping above 1000 euro",
            'quick pay with paypal',
            "free shipping above 1000 euro",
            'quick pay with paypal',
        ],
        styles: {
            container: {
            },
            text: {
                color: '#000',
                textTransform: 'uppercase',
                // color: '#B515FF',
                fontSize: '40px',
                letterSpacing: '2px',
                WebkitAnimation: 'marquee 200s infinite linear',
                animation: 'marquee 200s infinite linear'
            }
        }
    };

    return <Box mt={6}><Marquee text={selectedAnnouncement.texts.join(' ... !!! ... !!! ... ')} styles={selectedAnnouncement.styles}/></Box>
};
