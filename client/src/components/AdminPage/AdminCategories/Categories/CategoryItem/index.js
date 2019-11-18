import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as categoriesActions from '../../../../../store/actions/categories';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import ImgIcon from '../../../../common/images/ImgIcon';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';
import ConfirmModal from '../../../../common/messages/ConfirmModal';


export default props => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const itemName=item.name;

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);
    const openConfirmModal = () => setConfirmIsOpen(true);

    const confirmModalText = {
        title: `Are you sure to DELETE ${itemName.toUpperCase()}?`,
        description: `If you confirm deletion of ${itemName.toUpperCase()} category from database it will affect the total catalogue and cannot be undone`,
        buttonYes: 'DELETE, I am SURE',
        buttonNo: "No, don't DELETE"
    };

    const deleteItem = (event) => {
        event.preventDefault();
        setConfirmIsOpen(false);
        categoriesActions.deleteCategory(item)(dispatch);
        handleNotification(itemName);
    };

    const closeModal = () => setConfirmIsOpen(false);

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
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Link href={"/admin/categories/"+item.name}>
                        <OpenEditButton size="small"/>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <DeleteButton size="small" onClick={openConfirmModal}/>
                </Grid>
            </Grid>
        </ListItem>
        <ConfirmModal modalText={confirmModalText} modalIsOpen={confirmIsOpen} doFunction={deleteItem} closeFunction={closeModal}/>
        </>
    )
};
