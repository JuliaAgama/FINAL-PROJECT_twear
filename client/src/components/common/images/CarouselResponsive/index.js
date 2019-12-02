import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default props => {

    const {imgs, autoplay, showArrows, showStatus, showIndicators, showThumbs, thumbWidth, infiniteLoop, selectedItem, axis, width} = props;

    return (
        <Carousel
            autoPlay={autoplay}
            showArrows={showArrows} //show prev and next arrows
            showStatus={showStatus} //show index of the current item. i.e: (1/8)
            showIndicators={showIndicators} //show little dots at the bottom with links for changing the item
            showThumbs={showThumbs} //show thumbnails of the images
            thumbWidth={thumbWidth} //optionally specify pixel width (as an integer) of a thumbnail (including any padding) to avoid calculating values (helps with server-side renders or page cache issues)
            infiniteLoop={infiniteLoop} //infinite loop sliding
            selectedItem={selectedItem} //selects an item though props / defines the initial selected item
            axis={axis} // changes orientation - accepts horizontal and vertical
            width={width}
        >
            {imgs.map(item => (
                <div key={Math.random()}>
                    <img src={item} alt="Not Found" />
                </div>
            ))}
        </Carousel>

    )
};
