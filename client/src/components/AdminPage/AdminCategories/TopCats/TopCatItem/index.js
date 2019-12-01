import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import * as topCatsActions from '../../../../../store/actions/topCats';
import TopCatsApi from '../../../../../services/TopCats';
import CategoriesApi from '../../../../../services/Categories';

import {Typography, Box, Collapse, Grid, ListItem, Divider, IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './useStyles';

import Categories from '../../Categories';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';
import ConfirmModal from '../../../../common/messages/ConfirmModal';
import WarningModal from '../../../../common/messages/WarningModal';


export default props => {

    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const itemName=item.name;

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => setExpanded(!expanded);

    // handle deleting TopCat:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const [categoriesMatched, setCategoriesMatched] = useState(null);

    useEffect(() => {
        (new CategoriesApi()).getCategoriesByMatch({topCategory: item._id}).then(res => setCategoriesMatched(res));
    }, [item]);

    const checkMatchingCategories = () => {
        if(categoriesMatched && categoriesMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({title: `Cannot delete ${itemName.toUpperCase()} category!`, description: `It is used in categories: ${categoriesMatched.map(el => `"${(el.name.charAt(0).toUpperCase()+el.name.slice(1))}"`).join(', ')}!`});
            return true;
        };
        return false;
    };

    const closeWarning =() => setWarningIsOpen(false);

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);

    const openConfirm = event => {
        event.preventDefault();
        if (!checkMatchingCategories()) {
            setConfirmIsOpen(true);
        }
    };

    const confirmText = {
        title: `Are you sure to DELETE ${itemName.toUpperCase()}?`,
        description: `If you confirm deletion of ${itemName.toUpperCase()} top category from database it will affect the total catalogue and cannot be undone`,
        buttonYes: 'DELETE, I am SURE',
        buttonNo: "No, don't DELETE"
    };

    const closeConfirm = () => setConfirmIsOpen(false);

    const deleteItem = (event) => {
        event.preventDefault();
        (new TopCatsApi()).deleteTopCategory(item).then(res => {
            console.log('hi');
            setConfirmIsOpen(false);
            topCatsActions.getAllTopCats()(dispatch);
            handleNotification(itemName);
        });
    };

    const classes = useStyles();

    return (
        <>
        <Divider />
        <ListItem>
            <Grid container spacing={2} className={classes.paper}>
                <Grid item xs={12} sm container className={classes.container}>
                    <Grid item>
                        <Box className={classes.image}>
                            <img className={classes.img} src={item.img} alt="Not Found"/>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" className={classes.title}>{item.name}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            className={clsx(classes.expand, {[classes.expandOpen]: expanded})}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            color="secondary"
                            aria-label="expandDown"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container className={classes.container}>
                    <Grid item>
                        <Link to={"/admin/categories/top/"+item.name}>
                            <OpenEditButton/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <DeleteButton onClick={openConfirm}/>
                    </Grid>
                </Grid>
            </Grid>
        </ListItem>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className={classes.expanded}>
                <Categories topCatId={item._id}/>
                <Box textAlign='right'>
                    <IconButton
                        className={classes.expandOpen}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        color="secondary"
                        aria-label="expandDown"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </Box>
            </div>
        </Collapse>
        <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
        <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteItem} closeFunction={closeConfirm}/>
        </>
    )
};
