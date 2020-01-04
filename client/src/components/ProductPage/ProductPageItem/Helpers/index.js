import React from "react";

export const setColors = (product) => {
    if (product.colors) {
        const colors = product.colors.map(item => <option key={item._id} value={item.color.name}>{item.color.name}</option>);
        return colors;
    }
};

export const setSizes = (product, color) => {
    if (product.colors) {
        let sizes = [];
        product.colors.forEach(item => {
            if (item.color.name === color) {
                item.sizes.forEach(size => {
                    sizes.push(<option key={size.size.name} value={size.size.name}>{size.size.name}</option>)
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
                if (item.color.name === color){
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