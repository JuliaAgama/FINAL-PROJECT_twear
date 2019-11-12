import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';
import {Link} from "react-router-dom";
import CategoryForm from './CategoryForm';

export default props => {

    const categoryName = props.match.params.categoryName;
    const topCatName = props.match.params.topCatName;

    // // check if category exists or new:
    // let [exists, setExists] = useState(undefined);
    // useEffect(()=> {
    //     if(topCatName !== 'newTopCategory' && !categoryName.includes('newCategory')) {
    //         setExists(topCatName || categoryName);
    //     }
    // },[categoryName, topCatName]);

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
        topCatsActions.getAllTopCats()(dispatch);
        categoriesActions.getAllCategories()(dispatch);
        gendersActions.getAllGenders()(dispatch);
    }, [dispatch]);

    const onSubmitHandler = formData => {
        // for category:
        if (categoryName) {
            categoryName.includes('newCategory') ?
                // add new category:
                categoriesActions.addCategory(formData)(dispatch) :
                // update existing category:
                categoriesActions.updateCategory(formData)(dispatch)
        // for top category:
        } else if (topCatName) {
            topCatName === 'newTopCategory' ?
                // add new TOP category:
                // console.log( 'new Top Category: ', formData):
                topCatsActions.addTopCat(formData)(dispatch) :
                // update existing TOP category:
                topCatsActions.updateTopCat(formData)(dispatch)
        }
    };

    return (
        <>
        <div className="m-5">
            <CategoryForm
                categoryName={categoryName}
                topCatName={topCatName}
                topCatsBase={topCatsBase}
                catsBase={catsBase}
                gendersBase={gendersBase}
                inTopCat={categoryName && categoryName.includes('newCategory') ? categoryName.slice(categoryName.indexOf('-')+1) : undefined}
                displayAdditional={displayAdditional}
                onSubmitHandler={onSubmitHandler}
            />
            <Link to={`/admin/categories`}>
                <button className="btn btn-secondary text-uppercase m-5">Back</button>
            </Link>
        </div>
        </>
    )
}
