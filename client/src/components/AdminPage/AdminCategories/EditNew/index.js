import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as topCatActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';
import {Link} from "react-router-dom";
import CategoryForm from './CategoryForm';

export default props => {

    const categoryName = props.match.params.categoryName;
    const topCatName = props.match.params.topCatName;

    console.log(props.match);

    // check if category exists or new:
    let [exists, setExists] = useState(undefined);
    useEffect(()=> {
        if(topCatName !== 'newTopCategory' && categoryName !== 'newCategory') {
            setExists(topCatName || categoryName);
        }
    },[categoryName, topCatName]);

    // show additional fields for category form, hide for topCat form
    let [displayAdditional, setDisplayAdditional] = useState('displayNone');
    useEffect(() => {
        if(categoryName && categoryName !== 'newTopCategory') {
            setDisplayAdditional('displayBlock');
        }
    },[]);

    const dispatch = useDispatch();
    const catsBase = useSelector(state => state.categories.categories);
    const topCatsBase = (useSelector(state => state.topCats.topCats));
    const gendersBase = useSelector(state => state.genders.genders);


    useEffect(() => {
        topCatActions.getAllTopCats()(dispatch);
        categoriesActions.getAllCategories()(dispatch);
        gendersActions.getAllGenders()(dispatch);
    }, [dispatch]);


    return (
        <>
        <div className="m-5">
            <CategoryForm
                categoryName={categoryName}
                topCatName={topCatName}
                topCatsBase={topCatsBase}
                catsBase={catsBase}
                gendersBase={gendersBase}
                exists={exists}
                displayAdditional={displayAdditional}
            />
            <Link to={`/admin/categories`}>
                <button className="btn btn-secondary text-uppercase m-5">Back</button>
            </Link>
        </div>
        </>
    )
}
