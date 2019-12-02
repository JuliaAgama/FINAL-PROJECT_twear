// example
import React from 'react';
import ReactDOM from 'react-dom';

// https://github.com/xiaolin/react-image-gallery
import ImageGallery from 'react-image-gallery';

import styles from 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {

    const {imgs} = props; //incoming array of images urls

    const images = imgs.map(url => (
        {original: url, thumbnail: url}
    ));

    return(
        <ImageGallery
            items={images}
            infinite={false} // infinite sliding, Boolean, default true
            lazyLoad={false} //  Boolean, default false
            showNav={false}// Boolean, default true
            showThumbnails={true}//  Boolean, default true
            thumbnailPosition={'bottom'}// String, default bottom, available positions: top, right, bottom, left
            showBullets={true} //Boolean, default false
            showIndex={true} //Boolean, default false
            autoPlay={false} //Boolean, default false
            slideDuration={450}// Number, default 450. transition duration during image slide in milliseconds
            slideInterval={3000} //Number, default 3000
            startIndex={0} //Number, default 0
            //onClick={} //onClick: Function, callback(event)
                //The following functions can be accessed using refs
                //play(): plays the slides
                //pause(): pauses the slides
                //fullScreen(): activates full screen
                //exitFullScreen(): deactivates full screen
                //slideToIndex(index): slides to a specific index
                //getCurrentIndex(): returns the current index
        />
    )
};
