import React, {useState} from 'react';
import {
    withWidth,
    Typography,
    Box,
    List,
    Divider,
    ListItem,
    Grid,
    IconButton,
    Collapse,
    Button
} from '@material-ui/core';
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Title from "./Title";
import Links from "./Links";
import Name from "./Name";
import Products from "./Products";
import useStyles from './useStyles';
import {useDispatch, useSelector} from "react-redux";
import {addProductsGallery, getProductsGallery, getAllProductsGallery} from '../../../../store/actions/productsGallery'
import ErrorModal from "../../../common/messages/ErrorModal";

function setProductsGallery(productsGallery) {
    localStorage.setItem('Name', productsGallery.name);
    localStorage.setItem('Title', productsGallery.title);
    localStorage.setItem('checkedProduct', JSON.stringify(productsGallery.checkedProduct));
    localStorage.setItem('Links', JSON.stringify(productsGallery.links));
}

function checkProductsGallery(productsGallery) {
    let response = '';
    const {name, title, links, checkedProduct} = productsGallery;
    if (!name || name === '') response += `Field NAME is empty. `;
    if (!title || title === '') response += `Field TITLE is empty. `;
    if (checkedProduct && checkedProduct.length < 4) {
        response += `You must choose 4 products. Now chosen ${checkedProduct.length} products. `;
    } else if (!checkedProduct) {
        response += `You must choose 4 products. `;
    }
    if (links && links.length < 2 ) {
        response += `You must choose 2 links. Now chosen ${links.length} links. `;
    } else if (!links) {
        response += `You must choose 2 links. `;
    }
    return response;
}

export default withWidth()(props => {
    const classes = useStyles();
    const {name, expandedMain, setExpandedMain, productsGallery, newProductsGallery, setIsShow} = props;
    if (productsGallery) setProductsGallery(productsGallery);
    const dispatch = useDispatch();
    const newGallery = useSelector(state => state.productsGallery.newProductsGallery);
    const optionsList = [{name: 'product gallery name'},{name: 'title'}, {name: 'products'}, {name: 'links'}];
    const [expanded, setExpanded] = useState({title: false, products: false, links: false, 'product gallery name': false});
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    const [errorModalText, setErrorModalText] = useState({title: `ERROR`, description: ``, button: 'Continue create'});
    const handleExpandClick = itemName => setExpanded({...expanded, [itemName]: (!expanded[itemName])});
    const closeErrorModal = () => setErrorIsOpen(false);

    const save = () => {
        if (newProductsGallery) {
            const errorDescription = checkProductsGallery(newGallery);
            if (errorDescription !== '') {
                setErrorModalText({...errorModalText, description: errorDescription})
                setErrorIsOpen(true);
            } else {
                dispatch(addProductsGallery(newGallery));
                setIsShow(false);
            }
        }
        if (name) setExpandedMain({...expandedMain, [name]: (!expandedMain[name])})
    };


    return (
        <Typography component="div" variant="body1">
            <Box className={classes.paper}>
                <List >
                    <Divider />
                    {optionsList.map((el, ind) => (
                        <Box key={ind}>
                            <ListItem >
                                <Grid container className={classes.container}>
                                    <Grid item> {el.name.toUpperCase()} </Grid>
                                    <Grid item>
                                        <IconButton
                                            className={clsx(classes.expand, {[classes.expandOpen]: expanded[el.name]})}
                                            onClick={() => handleExpandClick(el.name)}
                                            aria-expanded={expanded[el.name]}
                                            color="secondary"
                                            aria-label="expandDown"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Collapse in={expanded[el.name]} timeout="auto" unmountOnExit>
                                <Box className={classes.expanded}>
                                    {el.name === 'product gallery name' ?
                                        <Name setExpanded={setExpanded} newProductsGallery={newProductsGallery} /> : <></>
                                    }
                                    {el.name === 'title' ?
                                        <Title setExpanded={setExpanded} newProductsGallery={newProductsGallery}/> : <></>
                                    }
                                    {el.name === 'products' ?
                                        <Products setExpanded={setExpanded} newProductsGallery={newProductsGallery}/> : <></>
                                    }
                                    {el.name === 'links' ?
                                        <Links setExpanded={setExpanded} newProductsGallery={newProductsGallery}/> : <></>
                                    }
                                </Box>
                            </Collapse>
                        </Box>
                    ))}
                    <Divider/>
                </List>
            </Box>
            <Button
                fullWidth={true}
                variant="outlined"
                className={classes.btn}
                onClick={save}
            > {`SAVE`}</Button>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={closeErrorModal}
                closeFunction={closeErrorModal}
            />
        </Typography>
    )
});