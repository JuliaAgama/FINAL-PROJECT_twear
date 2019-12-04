import React, {useState, useEffect} from 'react';

import { Box } from '@material-ui/core';

import useStyles from './useStyles';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {
    const {item} = props;

    const [css, setCss] = useState({backgroundColor: 'transparent'});

    useEffect(() => {
        if (item && item.color) {
            setCss(item.color.cssValue);
        }
    }, [item])

    const classes = useStyles();
    // const classes = useStyles(css);

    return (
        <>
            <Box fontSize="body1.fontSize" pt={2} pb={2} textAlign='center' className={classes.colored} >  {item.color ? item.color.name.toUpperCase() : ''}</Box>
            <ImageGallery
                items={item.imgsColor.map(url => ({original: url, thumbnail: url} ))}
                showIndex={true}
                showBullets={true}
                showThumbnails={false}
                thumbnailPosition={'top'}
            />
        </>
    )
};
