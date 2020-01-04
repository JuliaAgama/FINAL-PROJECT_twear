import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Container, Hidden} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import CarouselProductPage from './Carusel'
import NameAndPrice from "./NameAndPrice";
import {setColors, setImgs, setSizes} from "./Helpers";
import useStyles from "./useStyles";

function Product() {
  const classes = useStyles();
  const product = useSelector(state => state.products.product);
  let imgs =[];
    const [color, setColor] = useState('Color');
    const [size, setSize] = useState('Size');

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
    );
}

export default Product;
