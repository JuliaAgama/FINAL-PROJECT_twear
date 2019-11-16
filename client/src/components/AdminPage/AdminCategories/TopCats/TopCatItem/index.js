import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as topCatsActions from '../../../../../store/actions/topCats';

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

    const [openConfirm, setOpenConfirm] = useState(false);
    const onDelete = () => setOpenConfirm(true);

    const modalText = {
        title: `Are you sure to DELETE ${itemName.toUpperCase()}?`,
        description: `If you confirm deletion of ${itemName.toUpperCase()} top category from database it will affect the total catalogue and cannot be undone`,
        button: 'DELETE, I am sure'
    };

    const deleteItem = (event) => {
        event.preventDefault();
        setOpenConfirm(false);
        topCatsActions.deleteTopCat(item)(dispatch);
        handleNotification(itemName);
    };

    const closeModal = () => setOpenConfirm(false);

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
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
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
                        <DeleteButton onDelete={onDelete}/>
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
            <ConfirmModal modalText={modalText} openConfirm={openConfirm} doFunction={deleteItem} closeFunction={closeModal}/>
        </>
    )
};
