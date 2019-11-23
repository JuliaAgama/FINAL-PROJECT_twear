import React, { useState, useEffect } from 'react';

import CategoriesApi from '../../../../../services/Categories';
import ProductsApi from '../../../../../services/Products';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import ImgIcon from '../../../../common/images/ImgIcon';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';
import ConfirmModal from '../../../../common/messages/ConfirmModal';
import WarningModal from '../../../../common/messages/WarningModal';


export default props => {

    const classes = useStyles();

    const {item, handleNotification, getUpdatedCategoriesList} = props;
    const itemName=item.name;

    // handle deleting category:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const [productsMatched, setProductsMatched] = useState(null);

    useEffect(() => {
        (new ProductsApi()).getProductsByMatch({category: item._id}).then(res => setProductsMatched(res));
    }, [item]);

    const checkMatchingProducts = () => {
        if(productsMatched && productsMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({title: `Cannot delete ${itemName.toUpperCase()} category!`, description: `It is used in products: ${productsMatched.map(el => `"${(el.name.charAt(0).toUpperCase()+el.name.slice(1))}"`).join(', ')}!`});
            return true;
        };
        return false;
    };

    const closeWarning =() => setWarningIsOpen(false);

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);

    const openConfirm = event => {
        event.preventDefault();
        if (!checkMatchingProducts()) {
            setConfirmIsOpen(true);
        }
    };

    const confirmText = {
        title: `Are you sure to DELETE ${itemName.toUpperCase()}?`,
        description: `If you confirm deletion of ${itemName.toUpperCase()} category from database it will affect the total catalogue and cannot be undone`,
        buttonYes: 'DELETE, I am SURE',
        buttonNo: "No, don't DELETE"
    };

    const deleteItem = (event) => {
        event.preventDefault();
        (new CategoriesApi()).deleteCategory(item).then(res => {
            setConfirmIsOpen(false);
            getUpdatedCategoriesList();
            handleNotification(itemName);
        })
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
                    <DeleteButton size="small" onClick={openConfirm}/>
                </Grid>
            </Grid>
        </ListItem>
        <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
        <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteItem} closeFunction={closeConfirm}/>
        </>
    )
};
