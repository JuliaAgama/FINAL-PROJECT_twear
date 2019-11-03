import React from 'react';
import {Link} from "react-router-dom";


const CatGalleryItem = (props) => {

    return (
        <>
            <div
                className="caterory-gallery-item col-12 col-md-6 col-lg-4 col-xl-2 card-body p-5 border border-secondary text-center"
            >
                <p>{props.item.category}</p>
            </div>
        </>
    )
}

export default CatGalleryItem;
