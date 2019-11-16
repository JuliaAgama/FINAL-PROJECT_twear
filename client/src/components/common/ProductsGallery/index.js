import React, {useState, useEffect} from 'react';

import ProductCard from '../ProductCard';

export default props => {

    const {categories, products, categoryName} = props;
    console.log(props);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryName !== '') {
            const filtProducts = products.filter(item => item.categories[0] === (categories.filter(item => item.name === categoryName))[0]._id);
            setFilteredProducts(filtProducts);
        }
    },[categories, products, categoryName]);

    return (
        <>
            <div className="products-gallery">
                <div className="row">
                    {filteredProducts.map(item =>
                            <ProductCard
                                item={item}
                                key={item._id}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
};
