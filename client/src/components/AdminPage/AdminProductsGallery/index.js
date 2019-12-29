import React, {useEffect, useState} from 'react';
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
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProductsGallery from './ProductsGallery';
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsGallery, deleteProductsGallery} from '../../../store/actions/productsGallery'
import AddWideButton from "../../common/buttons/AddWide";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import useStyles from './useStyles';


export default withWidth()(() => {
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => getAllProductsGallery()(dispatch), [dispatch]);
    const productsGalleries  = useSelector(state => state.productsGallery.productsGalleries);
    const optionsList = productsGalleries.map(item => {return {name: item.name, _id : item._id}});
    let galleryForShowState = {}
    productsGalleries.forEach(item => galleryForShowState[item.name] = false);

    const [galleryForShow, setGalleryForShow] = useState(galleryForShowState);
    const [isShow, setIsShow] = useState(false);
    const handleChange = name => event => {
        setGalleryForShow({ ...galleryForShow, [name]: event.target.checked });
    };

    const [expanded, setExpanded] = useState({});
    const handleExpandClick = itemName => setExpanded({...expanded, [itemName]: (!expanded[itemName])});
   const deleteHandler = (el) => {
       dispatch(deleteProductsGallery(el));
   };

   const showForm = () => {
       setIsShow(!isShow);
   };

    return (
        <Typography component="div" variant="body1">

            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">PRODUCTS GALLERY LIST</Box>

            <Box className={classes.paper}>
                <List >
                    <Divider />
                    {optionsList.map((el, ind) => (
                        <Box key={ind}>
                            <ListItem >
                                <Grid container className={classes.container}>
                                    <Grid item> {el.name.toUpperCase()} </Grid>
                                    <Grid item>
                                        <DeleteOutlineOutlinedIcon aria-label="delete" onClick={() => deleteHandler(el)} className={classes.deleteBtn}/>
                                        <Switch
                                            checked={galleryForShow[el.name]}
                                            onChange={handleChange(el.name)}
                                            value={el.name}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
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
                                    <ProductsGallery    name={el.name}
                                                        expandedMain={expanded}
                                                        setExpandedMain={setExpanded}
                                    />
                                </Box>
                            </Collapse>
                        </Box>
                    ))}
                    <Divider/>
                </List>
            </Box>
            <Box p={2} textAlign="center" className={classes.paper}>
                <AddWideButton text='CREATE NEW PRODUCTS GALLERY' color='secondary' onClick={showForm}/>
            </Box>
            {isShow ? <ProductsGallery setIsShow={setIsShow} newProductsGallery={true} /> : '' }
        </Typography>
    )
});