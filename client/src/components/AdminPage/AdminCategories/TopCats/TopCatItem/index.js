import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as topCatsActions from '../../../../../store/actions/topCats';
import CategoriesApi from '../../../../../services/Categories';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import ManageCategories from '../../Categories';
import ImgIcon from '../../../../common/images/ImgIcon';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';
import ConfirmModal from '../../../../common/messages/ConfirmModal';
import WarningModal from '../../../../common/messages/WarningModal';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';


export default props => {
    const classes = useStyles();
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

    const deleteItem = (event) => {
        event.preventDefault();
        setConfirmIsOpen(false);
        topCatsActions.deleteTopCat(item)(dispatch);
        handleNotification(itemName);
    };

    const closeConfirm = () => setConfirmIsOpen(false);

    return (
        <>
        <Divider />
        <ListItem>
            <Grid container className={classes.paper}>
                <Grid item xs={6}>
                    <Grid container className={classes.paper}>
                        <Grid item xs={4} >
                            <ImgIcon src={item.img}/>
                        </Grid>
                        <Grid item xs={7}> {item.name} </Grid>
                        <Grid item xs={1}>
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
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}>
                    <Link href={"/admin/categories/top/"+item.name}>
                        <OpenEditButton/>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <DeleteButton onClick={openConfirm}/>
                </Grid>
            </Grid>
        </ListItem>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className={classes.expanded}>
                <ManageCategories topCatId={item._id}/>
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
