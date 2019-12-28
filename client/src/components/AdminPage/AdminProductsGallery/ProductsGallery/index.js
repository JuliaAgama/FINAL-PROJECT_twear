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
import {useDispatch} from "react-redux";
import {addProductsGallery, getProductsGallery, getAllProductsGallery} from '../../../../store/actions/productsGallery'

function setProductsGallery(productsGallery) {
    localStorage.setItem('CustomId', productsGallery.customId);
    localStorage.setItem('Title', productsGallery.title);
    localStorage.setItem('checkedProduct', JSON.stringify(productsGallery.checkedProduct));
    localStorage.setItem('Links', JSON.stringify(productsGallery.links));
}

export default withWidth()(props => {
    const classes = useStyles();
    const {name, expandedMain, setExpandedMain, productsGallery} = props;
    setProductsGallery(productsGallery);
    const dispatch = useDispatch();
    const optionsList = [{name: 'product gallery name'},{name: 'title'}, {name: 'products'}, {name: 'links'}];
    const [expanded, setExpanded] = useState({title: false, products: false, links: false, 'product gallery name': false});
    const handleExpandClick = itemName => setExpanded({...expanded, [itemName]: (!expanded[itemName])});
    const save = () => {
        const homePageProductGallery = {
            customId: localStorage.getItem('CustomId'),
            title: localStorage.getItem('Title'),
            checkedProduct: JSON.parse(localStorage.getItem('checkedProduct')),
            links: JSON.parse(localStorage.getItem('Links'))
        }
        dispatch(addProductsGallery(homePageProductGallery));
        setExpandedMain({...expandedMain, [name]: (!expandedMain[name])})
    };
    const download = () => {
        dispatch(getProductsGallery(localStorage.getItem('CustomId')));
        dispatch(getAllProductsGallery());
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
                                        <Name setExpanded={setExpanded} /> : <></>
                                    }
                                    {el.name === 'title' ?
                                        <Title setExpanded={setExpanded} /> : <></>
                                    }
                                    {el.name === 'products' ?
                                        <Products setExpanded={setExpanded}/> : <></>
                                    }
                                    {el.name === 'links' ?
                                        <Links setExpanded={setExpanded}/> : <></>
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
            <Button
                fullWidth={true}
                variant="outlined"
                className={classes.btn}
                onClick={download}
            > {`Download`}</Button>
        </Typography>
    )
});