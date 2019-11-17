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

    const [openConfirm, setOpenConfirm] = useState(false);
    const onDelete = () => setOpenConfirm(true);

    const modalText = {
        title: `Are you sure to DELETE ${itemName.toUpperCase()}?`,
        description: `If you confirm deletion of ${itemName.toUpperCase()} category from database it will affect the total catalogue and cannot be undone`,
        button: 'DELETE, I am SURE'
    };

    const deleteItem = (event) => {
        event.preventDefault();
        setOpenConfirm(false);
        categoriesActions.deleteCategory(item)(dispatch);
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
                    <DeleteButton size="small" onDelete={onDelete}/>
                </Grid>
            </Grid>
        </ListItem>
        <ConfirmModal modalText={modalText} openConfirm={openConfirm} doFunction={deleteItem} closeFunction={closeModal}/>
        </>
    )
};
