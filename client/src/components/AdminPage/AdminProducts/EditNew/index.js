import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';
import * as colorsActions from '../../../../store/actions/colors';
import * as sizeTypesActions from '../../../../store/actions/sizeTypes';
import * as sizesActions from '../../../../store/actions/sizes';
import * as productsActions from '../../../../store/actions/products';

// import {  } from '@material-ui/core';

import ProductForm from './ProductForm';
import WarningModal from '../../../common/messages/WarningModal';
import Notification from '../../../common/messages/Notification';


export default props => {

    console.log(props);
    // const productName = "new product";
    const productName = props.match.params.productName;

    // get data (that are in need for the form) from data base:
    const dispatch = useDispatch();
    const productsBase = useSelector(state => state.products.products);
    const categoriesBase = useSelector(state => state.categories.categories);
    const topCatsBase = (useSelector(state => state.topCats.topCats));
    const gendersBase = useSelector(state => state.genders.genders);
    const colorsBase = useSelector(state => state.colors.colors);
    const sizeTypesBase = useSelector(state => state.sizeTypes.sizeTypes);
    const sizesBase = useSelector(state => state.sizes.sizes);

    const getItem = () => {
        if (productsBase && productName) {
            return productsBase.filter(el => el.name === productName)[0];
        }
        return {};
    };

    useEffect(() => {
        productsActions.getAllProducts()(dispatch);
        topCatsActions.getAllTopCats()(dispatch);
        categoriesActions.getAllCategories()(dispatch);
        gendersActions.getAllGenders()(dispatch);
        colorsActions.getAllColors()(dispatch);
        sizeTypesActions.getAllSizeTypes()(dispatch);
        sizesActions.getAllSizes()(dispatch);
    }, [dispatch]);

    const ref = useRef(null);
    const timeout = 2000;

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

    const onSubmitHandler = formData => {

        if (productName) {
            if (!formData.genders || formData.genders.length === 0) {
                setWarningIsOpen(true);
                setWarningText({title: 'Item cannot be saved', description: 'Choose at least one gender '});
                return false;
            } else {
                productName.includes('newProduct') ?
                    productsActions.addProduct(formData)(dispatch) :
                    productsActions.updateProduct(formData)(dispatch);
                    ref.current(`Product ${formData.name.toUpperCase()} has been saved!`);
            }
        };

        setTimeout(() => {
            window.location.assign(`/admin/products`);
        }, timeout)
    };

    return (
        <>
        <div className="m-5">
            <ProductForm
                productName={productName}
                item={getItem()}
                topCatsBase={topCatsBase}
                categoriesBase={categoriesBase}
                gendersBase={gendersBase}
                colorsBase={colorsBase}
                sizeTypesBase={sizeTypesBase}
                sizesBase={sizesBase}
                onSubmitHandler={onSubmitHandler}
            />
            <Link to={`/admin/products`}>
                <button className="btn btn-secondary text-uppercase m-5">Back</button>
            </Link>
        </div>
        <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
};
