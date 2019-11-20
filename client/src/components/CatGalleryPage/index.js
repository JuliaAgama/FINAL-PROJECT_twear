import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import CatGalleryItem from './CatGalleryItem';

const CatGalleryPage = (props) => {

    const [filteredCategories, setFilteredCategories] = useState([]);

    const {categoriesTree} = props;
    const urlGender = useParams().gender;

    useEffect(() => {
        const filteredCategories = categoriesTree.filter(item => item.gender === urlGender)[0].categories;
        console.log(filteredCategories);
        setFilteredCategories(filteredCategories);
    })

    return (
        <>
            <section className="category-gallery">
                <div className="row">
                    {filteredCategories.map(item =>
                            <CatGalleryItem
                                item={item}
                                key={item._id}
                            />
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default CatGalleryPage;
