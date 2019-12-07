import React, {useState, useEffect, useSelector} from 'react';
import namor from 'namor';

    const range = len => {
        const arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(i);
        }
        return arr;
    };


export default (...lens) => {

    const products = useSelector(state => state.products.productsFiltered.products);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if(products && products[0]) {setProduct(products[0]);}
    }, [products]);


    const newRow = () => {

        const statusChance = Math.random();

        return {
            sizes: namor.generate({ words: 1, numbers: 0 }),
            age: Math.floor(Math.random() * 30),
            visits: Math.floor(Math.random() * 100),
            progress: Math.floor(Math.random() * 100),
            status: statusChance > 0.66 ? 'relationship' :
                    statusChance > 0.33 ? 'complicated' : 'single',
        };
    };

    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return {
                ...newRow(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        })
    };

    return makeDataLevel();
};
