import React, {useState} from "react";
import {useSelector} from "react-redux";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import clamp from 'lodash-es/clamp'
// import { useSpring, animated } from 'react-spring'
// import { useGesture } from 'react-with-gesture'

import {Container, FormControl, NativeSelect, FormHelperText, Button} from "@material-ui/core";
import useStyles from "./useStyles";

import Spinner from '../../common/Spinner';


const setColors = (product) => {
    if (product.colors) {
        const colors = product.colors.map(item => <option key={item._id} value={item.color.name}>{item.color.name}</option>);
        return colors;
    }
};

const setSizes = (product, color) => {
    if (product.colors) {
        let sizes = [];
        product.colors.forEach(item => {
            if (item.color.name === color) {
                item.sizes.forEach(size => {
                    sizes.push(<option key={size.size.name} value={size.size.name}>{size.size.name}</option>)
                } )
            }
        });
        return sizes;
    }
};

const setImgs = (product, color) => {
    if (product.colors) {
        let imgs =[];
        if (color === 'Color') {
            imgs = product.imgs.map(item => {
                return <img key={item}
                            src={item}
                            alt="Img not found"
                />
            })
        } else {
            product.colors.forEach(item => {
                if (item.color.name === color){
                    item.imgsColor.forEach(img => {
                        imgs.push(<img key={img}
                                        src={img}
                                        alt="Img not found"
                        />)
                    })
                }
            })
        }
        return imgs;
    }
};


export default () => {

    const product = useSelector(state => state.productItem.productItem);
    const cart = useSelector(state => state.cart.cart);


    let imgs =[];
        const [color, setColor] = useState('Color');
        const [size, setSize] = useState('Size');

    // const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
    // const bind = useGesture(({ down, delta, velocity }) => {
    //     velocity = clamp(velocity, 1, 8)
    //     set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    // })

    if(product.imgs) {
        imgs = setImgs(product, color)
    }

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
            product: product,
            color: color,
            size: size,
        };
        console.log('chosen sku:', sku);
        // some logic
        // нужно, чтобы color и size были не просто названиями, а полноценными объектами, как в базе, или, как минимум с id.
        // т.к. для добавления продукта нужен объект sku, в котором у каждого свойства есть _id.
        // это лучше реализовать здесь, в самом компоненте - помостри Selector - в common создан, а также реализован в Admin ProductPage
    };


    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.mainContainer} >

            {/*Carusel*/}

            <Container maxWidth={false} className={classes.imgContainer} >
                {/*<animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>*/}
                    <Container maxWidth={false} className={classes.imgScale}>
                        <Carousel showThumbs={false}
                                showArrows={true}
                                showStatus={false}
                                // axis="vertical"
                                infiniteLoop={true}>
                            {imgs[0] ? imgs : <Spinner/>}
                        </Carousel>
                    </Container>
                {/*</animated.div>*/}
            </Container>


            <Container maxWidth={false} className={classes.container}>
                <p className={classes.productName}>{product.name}</p>
                <p className={classes.productPrice}>{product.price} usa</p>

                {/*Choose Color*/}

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
    );
}
