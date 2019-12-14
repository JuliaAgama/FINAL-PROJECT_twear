import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesByParentId} from "../../store/actions/categories";


const TopCategoryMenu = () => {
    const topCatId = useParams().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesByParentId(topCatId))
    }, [dispatch]);


    let categoriesItem = useSelector(state => state.categories.categories);
    console.log(categoriesItem);


    return <div>GOGI{topCatId}</div>;
};

export default TopCategoryMenu;
