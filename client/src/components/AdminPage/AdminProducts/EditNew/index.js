import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';
import * as sizeTypesActions from '../../../../store/actions/sizeTypes';
import * as colorsActions from '../../../../store/actions/colors';
import * as productsActions from '../../../../store/actions/products';
import ProductsApi from '../../../../services/Products';

import { Typography, Box } from '@material-ui/core';

import useStyles from "./useStyles";

import ProductForm from './ProductForm';
import ErrorModal from '../../../common/messages/ErrorModal';
import WarningModal from '../../../common/messages/WarningModal';
import Notification from '../../../common/messages/Notification';
import Spinner from '../../../common/Spinner';


export default props => {

    const history = useHistory();
    const dispatch = useDispatch();

    const itemNo = props.match.params.itemNo;

    useEffect(() => {
        if(itemNo !== 'newProduct') {productsActions.getProductItemByItemNo(itemNo)(dispatch)};
        dispatch(topCatsActions.getAllTopCats());
        dispatch(categoriesActions.getAllCategories());
        dispatch(gendersActions.getAllGenders());
        dispatch(sizeTypesActions.getAllSizeTypes());
        dispatch(colorsActions.getAllColors());
    }, [dispatch, itemNo]);

    const product = itemNo === 'newProduct' ? {name: itemNo} : useSelector(state => state.productItem.productItem);
    const topCatsBase = useSelector(state => state.topCats.topCats);
    const categoriesBase = useSelector(state => state.categories.categories);
    const gendersBase = useSelector(state => state.genders.genders);
    const sizeTypesBase = useSelector(state => state.sizeTypes.sizeTypes);
    const colorsBase = useSelector(state => state.colors.colors);

    const productLoaded = useSelector(state => state.productItem.loaded);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);
    const categoriesLoaded = useSelector(state => state.categories.loaded);
    const gendersLoaded = useSelector(state => state.genders.loaded);
    const sizeTypesLoaded = useSelector(state => state.sizeTypes.loaded);
    const colorsLoaded = useSelector(state => state.colors.loaded);

    //server errors catching:
    const productError = useSelector(state => state.productItem.error);
    const topCatsError = useSelector(state => state.topCats.error);
    const categoriesError = useSelector(state => state.categories.error);
    const gendersError = useSelector(state => state.genders.error);
    const sizeTypesError = useSelector(state => state.sizeTypes.error);
    const colorsError = useSelector(state => state.colors.error);

    const [errorIsOpen, setErrorIsOpen] = useState(false);

    useEffect(() => {
        if(productError || topCatsError || categoriesError || gendersError || sizeTypesError || colorsError) {setErrorIsOpen(true)}
    },[productError, topCatsError, categoriesError, gendersError, sizeTypesError, colorsError]
    );

    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);


    const ref = useRef(null);
    const timeout = 2000;

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

    const checkEmpty = field => {
        if(!field || field === ''|| field.length === 0) {
            setWarningIsOpen(true);
            setWarningText({title: 'Item cannot be saved', description: `Set  all fields`});
            return true;
        }
        return false;
    };

    const checkDoublesInDataBase = formData => {
        (new ProductsApi())
        .getProductsByMatch({itemNo: formData.itemNo})
        .then(res => res.filter(el => el._id !== product._id))
        .then(res => {
            if (res[0]) {
                setWarningIsOpen(true);
                setWarningText({title: 'Cannot save!', description: `Product with itemNo "${formData.itemNo}" already exists!`});
                return true;
            }
            return false;
        })
    };

    const onSubmitHandler = async formData => {

        if(checkEmpty(formData.itemNo) || checkEmpty(formData.name) || checkEmpty(formData.categories) || checkEmpty(formData.gender) || checkEmpty(formData.sizeType) || checkEmpty(formData.colors) ) {
            return false;
        };

        try {
            let double = await checkDoublesInDataBase(formData);
            if (double) { return false};

            itemNo.includes('newProduct') ?
                productsActions.addProduct(formData)(dispatch) :
                productsActions.updateProduct(formData)(dispatch);

            ref.current(`Product ${formData.name.toUpperCase()} has been saved!`);
            productsActions.getProductsByFilter(`itemNo=${formData.itemNo}`)(dispatch);

            setTimeout(() => {
                return history.push("/admin/products/"+formData.itemNo);
            }, timeout*2)

        } catch (error) {
            console.log('something happened')
            // setErrorIsOpen(true);
        }
    };

    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
        {productLoaded || product.name === 'newProduct' ?
            <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">Edit {product.name.toUpperCase()} </Box> : <Spinner/>
        }
            <Box p={2}>
                {(productLoaded && topCatsLoaded && categoriesLoaded && gendersLoaded && sizeTypesLoaded && colorsLoaded) || itemNo === 'newProduct' ?
                    <Typography component="div" variant="body1" className={classes.wrapper}>
                        <ProductForm
                            itemNo={itemNo}
                            item={product}
                            topCatsBase={topCatsBase}
                            categoriesBase={categoriesBase}
                            gendersBase={gendersBase}
                            sizeTypesBase={sizeTypesBase}
                            colorsBase={colorsBase}
                            onSubmitHandler={onSubmitHandler}
                        />
                    </Typography> : <Spinner/>
                }
                {product && product.itemNo && <Link to={`/admin/products/`+product.itemNo} className={classes.linkGreen}> {`<<   to ${cutName(product.name, 10)} page`} </Link>}
                <Box/>
                <Link to={`/admin/products`} className={classes.linkPink}> {`<<   to Products List`} </Link>
            </Box>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => history.push(`/admin/products/edit/`+product.itemNo)}
                closeFunction={closeErrorModal}
            />
        </Typography>
    )
};
