import React from "react";

export const setColors = (product) => {
    if (product.colors) {
        const colors = product.colors.map(item => <option key={item._id} value={item.color._id}>{item.color.name}</option>);
        return colors;
    }
};

export const setSizes = (product, color) => {
    if (product.colors) {
        let sizes = [];
        product.colors.forEach(item => {
            if (item.color._id === color) {
                item.sizes.forEach(size => {
                    if (size.quantity > 0) sizes.push(<option key={size.size.name} value={size.size._id}>{size.size.name}</option>)
                } )
            }
        });
        return sizes;
    }
};

export const setImgs = (product, color) => {
    if (product.colors) {
        let imgs =[];
        if (color === 'Color') {
            imgs = product.imgs.map(item => {
                return <img key={item}
                            src={item}
                            alt="Img not found"
                />
            })
        } else {
            product.colors.forEach(item => {
                if (item.color._id === color){
                    item.imgsColor.forEach(img => {
                        imgs.push(<img key={img}
                                       src={img}
                                       alt="Img not found"
                        />)
                    })
                }
            })
        }
        return imgs;
    }
};