import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import * as cartActions from '../../../store/actions/cart';

import {Container, Hidden, FormControl, NativeSelect, FormHelperText, Button} from "@material-ui/core";
import useStyles from "./useStyles";

import {setColors, setImgs, setSizes} from "./Helpers";
import CarouselProductPage from './Carusel'
import NameAndPrice from "./NameAndPrice";
import BlackTicker from '../../common/BlackTicker'
import ProductsGallery from "../../common/ProductsGallery";


export default () => {

    const dispatch = useDispatch();

    const product = useSelector(state => state.productItem.productItem);
    const {cart} = useSelector(state => state.cart);
    let products = useSelector(state => state.products.productsFiltered.products);

    if (products && product.itemNo) {
        products = products.filter(item => item.itemNo !== product.itemNo)
        products.splice(4);
    };

    let imgs =[];
    const [color, setColor] = useState('Color');
    const [size, setSize] = useState('Size');

    if(product.imgs) {
        imgs = setImgs(product, color)
    };

    const handleColorChange = event => {
        setColor(event.target.value);
        setSize('Size')
    };
    const handleSizeChange = event => {
        setSize(event.target.value);
    };

    setColors(product);

    const addToProductCart = () => {
        const sku = {
            product: {_id : product._id},
            color : {_id : color},
            size : {_id : size}
        }
        console.log('chosen sku:', sku);

        dispatch(cartActions.addProductToCart(cart, sku));
    };

    const classes = useStyles();

    return (
        <>
        <Container maxWidth={false} className={classes.mainContainer} >

            <Hidden mdUp>
                <Container maxWidth={false} className={classes.mobileContainer}>
                    <NameAndPrice product={product}/>
                </Container>
            </Hidden>

            <CarouselProductPage imgs={imgs}/>

            <Container maxWidth={false} className={classes.container}>

                <Hidden smDown>
                    <NameAndPrice product={product}/>
                </Hidden>

                {/*Choose Color*/}

                <Container maxWidth={false} className={classes.filter} >
                    <FormControl>
                        <NativeSelect
                            value={color}
                            onChange={handleColorChange}
                            className={classes.option}
                        >
                            <option value='Color'>Color</option>
                            {setColors(product)}
                        </NativeSelect>
                    </FormControl>

                    {/*Choose Size*/}

                    <FormControl disabled={color === 'Color'}>
                        <NativeSelect
                            value={size}
                            onChange={handleSizeChange}
                            className={classes.option}
                        >
                            <option value='Size'>Size</option>
                            {setSizes(product, color)}
                        </NativeSelect>
                        {color === 'Color' ? <FormHelperText>First choose a color</FormHelperText> : ''}
                    </FormControl>
                </Container>

                {/*AddProductToCartBtn*/}

                <Button fullWidth={true}
                        variant="outlined"
                        className={classes.btn}
                        onClick={addToProductCart}
                >
                    Add to shopping bag
                </Button>

                {/*Details&Description*/}

                <Container maxWidth={false} className={classes.addInfo}>
                    <p className={classes.details}>Details</p>
                    <p className={classes.delivery}>Delivery & Payment</p>
                </Container>

                <p>{product.description}</p>

            </Container>
        </Container>

        <Hidden smDown>
            <BlackTicker/>
        </Hidden>
            {products ? <ProductsGallery  products={products} productPage={true} /> : ""}
        </>


    );
}
