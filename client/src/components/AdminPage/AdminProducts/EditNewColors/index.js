import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';

import * as productsActions from '../../../../store/actions/products';
import TopCatsApi from '../../../../services/TopCats';
import ImagesApi from '../../../../services/Images';

import { Typography, Box, Button } from '@material-ui/core';

import useStyles from "./useStyles";

import ColorItem from './ColorItem';
import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';
import Spinner from '../../../common/Spinner';


export default props => {

    const history = useHistory();

    const itemNo = props.match.params.itemNo;

    // get data (that are in need for the form) from data base:
    const dispatch = useDispatch();

    const getProductByItemNo = () => {
        productsActions.getProductItemByItemNo(itemNo)(dispatch);
    };

    const updateProduct = () => {
        productsActions.updateProduct(formData)(dispatch);
    };

    useEffect(() => {
        dispatch(productsActions.getProductItemByItemNo(itemNo));
    }, [dispatch]);

    const product = useSelector(state => state.productItem.productItem);
    const productLoaded = useSelector(state => state.productItem.loaded);

    const [topCatName, setTopCatName] = useState('');
    useEffect(() => {
        if(product && product.categories) {
            (new TopCatsApi())
            .getTopCategoryById(product.categories[0].category.topCategory)
            .then(res => {setTopCatName(res.name.toLowerCase())});
        }
        return () => {
            setTopCatName('');
        }
    }, [product]);

    const [productCloudinaryPath, setProductCloudinaryPath] = useState('');
        useEffect(() => {
            if(product && product.categories && topCatName !=='') {
                setProductCloudinaryPath(`/twear/${topCatName}/${product.categories[0].category.name.toLowerCase()}/${product.itemNo.toLowerCase()}/`)
            }
            return () => {
                setProductCloudinaryPath('');
            }
        }, [product, topCatName]);

    //server errors catching:
    const productError = useSelector(state => state.productItem.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(productError) {setErrorIsOpen(true)}
    },[productError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    const [formData, setFormData] = useState({});

    useEffect(()=> {
        if (product) {
            setFormData(cloneDeep(product));
        }
        return () => {
            setFormData({})
        }
    },[product]);

    const onUploadImgs = color => newImgs => {
        if(formData && formData.colors) {
            formData.colors[formData.colors.findIndex(el => el.color._id === color.color._id)].imgsColor.push(...newImgs);
            setFormData({
                ...formData
            });
        }
    };

    const onDeleteImg = color => imgLink => {
        if(formData && formData.colors) {
            formData.colors[formData.colors.findIndex(el => el.color._id === color.color._id)].imgsColor.splice(formData.colors[formData.colors.findIndex(el => el.color._id === color.color._id)].imgsColor.indexOf(imgLink),1)

            setFormData({
                ...formData
            });
        }
    };

    // const onChangeLink = color => event => {
    //     if(formData && formData.colors) {
    //         formData.colors[formData.colors.findIndex(el => el._id === color._id)].imgsColor.splice(parseInt(event.target.name), 1, event.target.value);

    //         setFormData({
    //             ...formData
    //         });
    //     }
    // };

    const ref = useRef(null);
    const timeout = 2000;

    const onSubmitHandler = async event => {
        event.preventDefault();
        let productColorImgs = [];
        if(product && product.colors && product.colors.some(el => el.imgsColor && el.imgsColor[0])) {
            product.colors.forEach(el => el.imgsColor.forEach(elem => {
                productColorImgs.push(elem);
            }));
        };
        let formDataColorImgs = [];
        if(formData && formData.colors && formData.colors.some(el => el.imgsColor && el.imgsColor[0])) {
            formData.colors.forEach(el => el.imgsColor.forEach(elem => {
                formDataColorImgs.push(elem);
            }));
        };

        productColorImgs.forEach(el => {
            if (!formDataColorImgs.some(elem => elem === el)) {
                (new ImagesApi()).deleteImage(el);
            }
        });

        await updateProduct();
        ref.current(`Color images of ${formData.name.toUpperCase()} has been saved!`);
        getProductByItemNo();
    };

    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <form autoComplete="off">
            {productLoaded ?
                <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">
                    <Box>Edit colors images</Box>
                    <Box fontSize="body1.fontSize">{product.name.toUpperCase()}</Box>
                </Box> : <Spinner/>
            }
                <Box p={2}>
                    {productLoaded ?
                        <Typography component="div" variant="body1" className={classes.wrapper}>
                            {formData.colors && formData.colors.map(item =>
                                <ColorItem
                                    key={item.color._id || Math.random()}
                                    productCloudinaryPath={productCloudinaryPath}
                                    item={item}
                                    //onChangeLInk={onChangeLink(item)}
                                    onUploadImgs={onUploadImgs(item)}
                                    onDeleteImg={onDeleteImg(item)}
                                />
                            )}
                        </Typography> : <Spinner/>
                    }
                </Box>
                <Box >
                    <Button
                        fullWidth={true}
                        variant="outlined"
                        className={classes.btn}
                        onClick={onSubmitHandler}
                    > {`SAVE`}</Button>
                </Box>
                {product && product.itemNo && <Link to={`/admin/products/`+product.itemNo} className={classes.linkGreen}> {`<<   to ${cutName(product.name, 10)} page`} </Link>}
                <Box/>
                <Link to={`/admin/products`} className={classes.linkPink}> {`<<   to Products List`} </Link>
            </form>
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
