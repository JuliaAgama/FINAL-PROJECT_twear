import CategoryLink from "../CategoryLink";
import React from "react";

export function clearQueryString(queryString, filter) {
        const queryItems = queryString.split('&');
        const withoutFilteredItem = queryItems.map(item => {
            if (item.startsWith(filter)) {
                return ;
            }
            return item;
        });
        let result = withoutFilteredItem.join('&');
        if (result.endsWith('&')) {
            result = result.slice(0, result.length-1);
        }
        return result;
};

export function getImgByColor(product, color) {
    const colorObg  = product.colors.filter(item => item.color.name === color);
    if (colorObg.length > 0) return colorObg[0].imgsColor;
};

export function getSetOfProductsColors(products, queryString) {
    let colorSet = new Set();
    const color = getChosenColor(queryString);
    if (color) {
        colorSet.add(color);
        return colorSet;
    }
    products.forEach(card => {
        card.colors.forEach(item => {
            if (item.color) {
                colorSet.add(item.color.name);
            }
        })
    });
    return colorSet;
}

export function getChosenColor(queryString) {
    let color = null;
    if (queryString) {
        const queryStringItems = queryString.split('&');
        queryStringItems.forEach(item => {
            if (item.startsWith('color')){
                const tmpStr = item.substring(6);
                if (tmpStr !== 'undefined') color = tmpStr;
            }
        });
    }
    return color;
}

export function getSetOfProductSizes(product) {
    let sizesSet = new Set();
    product.colors.forEach(item => {
        if (item.sizes) {
            item.sizes.forEach(size => {
                sizesSet.add(size.size.name + " ");
            });
        }
    });
    return sizesSet;
};

export function getCategoryTitle(queryString) {
    let title = "Selected New Arrivals";
    let gender = '';
    let name = '';
    if (queryString) {
        const genderAndName = queryString.split('&');
        gender = genderAndName[1].split('=')[1];
        name = genderAndName[2].split('=')[1];
        if (gender === 'men') {
            gender = `Men's`;
        } else if (gender === 'women') {
            gender = `Women's`
        } else gender = '';
        title = gender + " " + name;
    }
    return title;
};

export function getImgsUrl(queryString, product) {
    const color = getChosenColor(queryString);
    let img1, img2;
    if (color) {
        const imgsColor = getImgByColor(product, color);
        if (imgsColor) {
            img1 = imgsColor[0];
            img2 = imgsColor[1]
        }
    } else {
        img1 = product.imgs[0];
        img2 = product.imgs[1]
    }
    return [img1, img2];
}

export function createHomePage(productCards, matches, productsGallery) {
    const links = productsGallery.links;
    if (!matches) {
        productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                        categoryLink={`/categories/page=shop&gender=women&category=${links.womenLinkID}`}
                                        categoryName={`Women's ${links.womenLinkID}`}
                                        borderRight={true} />);
        productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                        categoryLink={`/categories/page=shop&gender=unisex&category=${links.menLinkID}`}
                                        categoryName={`Men's ${links.menLinkID}`}
                                        borderRight={false} />);
    } else {
        productCards.splice(2,0,<CategoryLink key={Date.now()+ Math.random()}
                                              categoryLink={`/categories/page=shop&gender=women&category=${links.womenLinkID}`}
                                              categoryName={`Women's ${links.womenLinkID}`}
                                              borderRight={false}
                                              borderBottom={true}  />);
        productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                        categoryLink={`/categories/page=shop&gender=unisex&category=${links.menLinkID}`}
                                        categoryName={`Men's ${links.menLinkID}`}
                                        borderRight={false} />);
    }
}