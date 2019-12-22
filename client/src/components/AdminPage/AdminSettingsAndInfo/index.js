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

export default withWidth()(() => {
    const classes = useStyles();
    const optionsList = [{name: 'product gallery name'},{name: 'title'}, {name: 'products'}, {name: 'links'}];
    const [expanded, setExpanded] = useState({title: false, products: false, links: false});
    const handleExpandClick = itemName => setExpanded({...expanded, [itemName]: (!expanded[itemName])});
    const save = () => {
        const homePageProductGallery = {
            customId: localStorage.getItem('CustomId'),
            title: localStorage.getItem('Title'),
            products: JSON.parse(localStorage.getItem('checkedProduct')),
            links: JSON.parse(localStorage.getItem('Links'))
        }
    };
    return (
        <Typography component="div" variant="body1">

            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">SETTINGS AND INFO</Box>

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
                                        <Name/> : <></>
                                    }
                                    {el.name === 'title' ?
                                        <Title/> : <></>
                                    }
                                    {el.name === 'products' ?
                                        <Products/> : <></>
                                    }
                                    {el.name === 'links' ?
                                        <Links/> : <></>
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
        </Typography>
    )
});