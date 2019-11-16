import React, { useState, useRef } from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import ImgIcon from '../../../../common/images/ImgIcon';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';
import ConfirmModal from '../../../../common/messages/ConfirmModal';
import Notification from '../../../../common/messages/Notification';


export default props => {

    const classes = useStyles();

    const {item} = props;

    const [openConfirm, setOpenConfirm] = useState(false);

    const onDelete = () => {
        setOpenConfirm(true);
    };

    const modalText = {
        title: `Are you sure to DELETE ${item.name.toUpperCase()}?`,
        description: `If you confirm deletion of ${item.name.toUpperCase()} category from database it will affect the total catalogue and cannot be undone`,
        button: 'DELETE, I am SURE'
    };

    const ref = useRef(null);
    const timeout = 2000;
    const deleteItem = () => {
        setOpenConfirm(false);
        ref.current(`Category ${item.name.toUpperCase()} is deleted from database!`);
    };
    const closeModal = () => {
        setOpenConfirm(false);
    };

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
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
};
