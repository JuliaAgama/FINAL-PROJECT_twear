import React, {useState, useEffect} from 'react';

import { Box } from '@material-ui/core';

import useStyles from './useStyles';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {
    const {item} = props;

    const [css, setCss] = useState({color: 'transparent'});

    useEffect(() => {
        if (item && item.color) {
            setCss({color: item.color.cssValue});
        }
    }, [item])

    const cutName = (string, l) => string.length > l ? string.slice(0, l-2)+'..' : string;

    const classes = useStyles(css);

    return (
        <>
            <Box fontSize="body1.fontSize"  pb={2} textAlign='center' className={classes.colored} >  {item.color ? cutName(item.color.name.toUpperCase(),6) : ''}</Box>
            {item.imgsColor ?
                <ImageGallery
                    items={item.imgsColor.map(url => ({original: url, thumbnail: url} ))}
                    showIndex={true}
                    showBullets={true}
                    showThumbnails={false}
                    thumbnailPosition={'top'}
                /> : <>No photos</>
            }
        </>
    )
};
