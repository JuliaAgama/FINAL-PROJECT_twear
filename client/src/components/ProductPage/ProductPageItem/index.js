import React, {useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import './imgStyle.css'
import * as cartActions from '../../../store/actions/cart';

import {Container, Hidden, FormControl, NativeSelect, FormHelperText, Button} from "@material-ui/core";
import useStyles from "./useStyles";

import {setColors, setImgs, setSizes} from "./Helpers";
import CarouselProductPage from './Carusel'
import AlternativeCarousel from './AlternativeCarousel'
import SlickCarousel from './SlickCarousel'
import NameAndPrice from "./NameAndPrice";
import BlackTicker from '../../common/BlackTicker'
import ProductsGallery from "../../common/ProductsGallery";

import Notification from '../../common/messages/Notification';


export default () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const product = useSelector(state => state.productItem.productItem);
    const {cart} = useSelector(state => state.cart);
    let {products} = useSelector(state => state.products);

    if (products && product.itemNo) {
        products = products.filter(item => item.itemNo !== product.itemNo)
        products.splice(4);
    };

    let imgs =[];
    const [color, setColor] = useState('Color');
    const [size, setSize] = useState('Size');
    const [isDisabled, setDisabled] = useState(true);

    if(product.imgs) {
        imgs = setImgs(product, color)
    };

    const handleColorChange = event => {
        setColor(event.target.value);
        setSize('Size');
        setDisabled(true);
    };
    const handleSizeChange = event => {
        setSize(event.target.value);
        if (event.target.value !== 'Size') {
            setDisabled(false)
        } else {
            setDisabled(true);
        }
    };

    const colors = setColors(product);
    const sizes = setSizes(product, color);

    const ref = useRef(null);
    const timeout = 2000;

    const addToProductCart = () => {
        const sku = {
            product: product,
            color : JSON.parse(color),
            size : JSON.parse(size),
            quantity: 1
        };
        dispatch(cartActions.addProductToCart(cart, sku));

        ref.current(`${sku.quantity} ${sku.product.name.toUpperCase()} (color: ${sku.color.name.toUpperCase()}, size: ${sku.size.name.toUpperCase()}) has been added to Your cart!`);

        setTimeout(() => {
            return history.push("/cart");
        }, timeout)
    };

    return (
        <>
        <Container maxWidth={false} className={classes.mainContainer} >

            <Hidden mdUp>
                <Container maxWidth={false} className={classes.mobileContainer}>
                    <NameAndPrice product={product}/>
                </Container>
            </Hidden>

            <CarouselProductPage imgs={imgs}/>
            {/*<AlternativeCarousel dataSource={imgs}/>*/}
            {/*<SlickCarousel imgs={imgs}/>*/}

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
                            {colors}
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
                            {sizes}
                        </NativeSelect>
                        {color === 'Color' ? <FormHelperText>First choose a color</FormHelperText> : ''}
                    </FormControl>
                </Container>

                {/*AddProductToCartBtn*/}

                <Button fullWidth={true}
                        variant="outlined"
                        className={classes.btn}
                        onClick={addToProductCart}
                        disabled = {isDisabled}
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
        {products && <ProductsGallery  products={products} productPage={true} />}
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    );
};
