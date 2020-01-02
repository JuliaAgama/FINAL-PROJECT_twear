import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
// import clamp from 'lodash-es/clamp'
// import { useSpring, animated } from 'react-spring'
// import { useGesture } from 'react-with-gesture'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import Spinner from '../../common/Spinner'
import useStyles from "./useStyles";
import Button from "@material-ui/core/Button";

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

function Product() {
  const classes = useStyles();
  const product = useSelector(state => state.products.product);
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
        // some logic
    }

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

export default Product;
