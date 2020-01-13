import React from "react";
import Zoom from 'react-img-zoom'
import ReactImageZoom from 'react-image-zoom';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

export const setColors = (product) => {
    if (product.colors) {
        const colors = product.colors.map(item => <option key={item._id} value={JSON.stringify(item.color)}>{item.color.name}</option>);
        return colors;
    }
};

export const setSizes = (product, color) => {
    if (color !== 'Color') {
        if (product.colors) {
            let sizes = [];
            product.colors.forEach(item => {
                if (item.color._id === (JSON.parse(color))._id) {
                    item.sizes.forEach(size => {
                        if (size.quantity > 0) sizes.push(<option key={size.size.name} value={JSON.stringify(size.size)}>{size.size.name}</option>)
                    } )
                }
            });
            return sizes;
        }
    }
};

export const setImgs = (product, color) => {
    if (product.colors) {
        let imgs =[];
        if (color === 'Color') {
            imgs = product.imgs.map(item => {
                return  <PinchZoomPan maxScale={2} doubleTapBehavior='zoom' zoomButtons={false}>
                            <img  key={item}
                                  src={item}
                                                // zoomWidth={400}
                                     // zoomScale={2}
                                  alt="Img not found"
                                     // height={1050}
                                     //            width={650}
                                     //            zoomPosition={'origin'}
                            />
                        </PinchZoomPan>
            })
        } else {
            product.colors.forEach(item => {
                if (item.color._id === (JSON.parse(color))._id){
                    item.imgsColor.forEach(img => {
                        imgs.push(<PinchZoomPan maxScale={2} doubleTapBehavior='zoom' zoomButtons={false}>
                                    <img  key={img}
                                          src={img}
                                        // zoomWidth={400}
                                        // zoomScale={2}
                                          alt="Img not found"
                                        // height={1050}
                                        //            width={650}
                                        //            zoomPosition={'origin'}
                                    />
                                </PinchZoomPan>)
                    });
                    if (imgs.length < 1) {
                        imgs = product.imgs.map(item => {
                            return <PinchZoomPan maxScale={2} doubleTapBehavior='zoom' zoomButtons={false}>
                                    <img  key={item}
                                          src={item}
                                        // zoomWidth={400}
                                        // zoomScale={2}
                                          alt="Img not found"
                                        // height={1050}
                                        //            width={650}
                                        //            zoomPosition={'origin'}
                                    />
                                </PinchZoomPan>
                        })
                    }
                }
            })
        }
        return imgs;
    }
};