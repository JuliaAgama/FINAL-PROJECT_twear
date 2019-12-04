import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';
import * as colorsActions from '../../../../store/actions/colors';
import * as sizeTypesActions from '../../../../store/actions/sizeTypes';
import * as sizesActions from '../../../../store/actions/sizes';
import * as productsActions from '../../../../store/actions/products';

import { Typography, Box } from '@material-ui/core';

import useStyles from "./useStyles";

import ProductForm from './ProductForm';
import WarningModal from '../../../common/messages/WarningModal';
import Notification from '../../../common/messages/Notification';


export default props => {

    const history = useHistory();

    console.log(props);
    // const productName = "new product";
    const productName = props.match.params.productName;

    // get data (that are in need for the form) from data base:
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsFiltered.products)
    const productsBase = useSelector(state => state.products.products);
    const categoriesBase = useSelector(state => state.categories.categories);
    const topCatsBase = (useSelector(state => state.topCats.topCats));
    const gendersBase = useSelector(state => state.genders.genders);
    const colorsBase = useSelector(state => state.colors.colors);
    const sizeTypesBase = useSelector(state => state.sizeTypes.sizeTypes);
    const sizesBase = useSelector(state => state.sizes.sizes);

    // const getItem = () => {
    //     if (productsBase && productName) {
    //         return productsBase.filter(el => el.name === productName);
    //     }
    //     return {};
    // };

    useEffect(() => {
        productsActions.getProductsByFilter(`name=${productName}`)(dispatch);
        productsActions.getAllProducts()(dispatch);
        topCatsActions.getAllTopCats()(dispatch);
        categoriesActions.getAllCategories()(dispatch);
        gendersActions.getAllGenders()(dispatch);
        colorsActions.getAllColors()(dispatch);
        sizeTypesActions.getAllSizeTypes()(dispatch);
        sizesActions.getAllSizes()(dispatch);
    }, [dispatch]);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if(products && products[0]) {setProduct(products[0]);}
    }, [products]);

    const ref = useRef(null);
    const timeout = 2000;

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

    const checkDoubles = (existingList, formData) => {
        const listBesidesItem = existingList.filter(el => el._id !== formData._id);
        if( productName && listBesidesItem.some(el => el.itemNo === formData.itemNo)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Product with itemNo "${formData.itemNo}" already exists!`});
            return true;
        };
        return false;
    };

    const onSubmitHandler = formData => {

        if (productName) {
            if(checkDoubles(productsBase, formData)) {
                return false;
            };
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
            return history.push("/admin/products/edit/"+formData.name);
            // window.location.assign(`/admin/products`);
        }, timeout)
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">Edit {productName.toUpperCase()}</Box>
            <Box p={2}>
                <ProductForm
                    productName={productName}
                    item={product}
                    topCatsBase={topCatsBase}
                    categoriesBase={categoriesBase}
                    gendersBase={gendersBase}
                    colorsBase={colorsBase}
                    sizeTypesBase={sizeTypesBase}
                    sizesBase={sizesBase}
                    onSubmitHandler={onSubmitHandler}
                />
                <Link to={`/admin/products`} className={classes.link}> {`<<   to Products List`} </Link>
            </Box>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </Typography>
    )
};
