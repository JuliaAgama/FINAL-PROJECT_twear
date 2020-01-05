import React from 'react';
import {Box} from "@material-ui/core";
import Marquee from "../Marquee";

export default () => {

    const mainAnnouncement = {
        texts: [
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
        ],
        styles: {
            container: {
            },
            text: {
                color: '#ED1472',
                paddingLeft: '30px',
                paddingRight: '30px',
                fontSize: '40px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                WebkitAnimation: 'marquee 300s infinite linear',
                animation: 'marquee 300s infinite linear'
            }
        }
    };

    return <Box position='absolute' top='-70px' width='100%'><Marquee text={mainAnnouncement.texts.join(' ... !!! ... sale ... !!! ... ')} styles={mainAnnouncement.styles}/></Box>
};
