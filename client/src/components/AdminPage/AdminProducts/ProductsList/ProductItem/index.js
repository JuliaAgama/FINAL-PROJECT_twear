import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as productsActions from '../../../../../store/actions/products';
import ProductsApi from '../../../../../services/Products';
import ArchivesApi from '../../../../../services/Archives';

import { Typography, Box, Grid, ListItem, Divider, Hidden, Tooltip} from '@material-ui/core';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';

import ConfirmModal from '../../../../common/messages/ConfirmModal';
import WarningModal from '../../../../common/messages/WarningModal';


export default props => {

    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const itemName = item.name;

    // handle archiving or deleting product:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const [quantity, setQuantity] = useState(null);
    const [action, setAction] = useState('');

    useEffect(() => {
        if(item && item.colors && item.colors[0]) {
            setQuantity(item.colors
                .map(el =>
                    el.sizes && el.sizes[0] && el.sizes.some(elem => elem.quantity) ?
                    el.sizes.map(elem => parseInt(elem.quantity)) : [0])
                .flat()
                .reduce((sum,num) => sum + num));
        };
        return () => {
            setQuantity(null);
        }
    }, [item]);

    const checkQuantity = action => {
        if(quantity > 0) {
            setWarningIsOpen(true);
            setWarningText({title: `Cannot ${action.toUpperCase()}  ${itemName.toUpperCase()} !`, description: `There are ${quantity} items of this product available in storage. Sell them or get rid of them before trying to ${action.toUpperCase()}.`});
            return true;
        };
        return false;
    };

    const closeWarning =() => setWarningIsOpen(false);

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);

    const openConfirm = action  => {
        setAction(action);
        if (!checkQuantity(action)) {
            setConfirmIsOpen(true);
        }
    };

    const confirmText = action => {
        switch(action) {
            case 'archive' :
                return {
                    title: `Are you sure to ${action.toUpperCase()} ${itemName.toUpperCase()}?`,
                    description: `If you confirm archiving of ${itemName.toUpperCase()} product it will be moved from database to archive. Product will not be accessible for editing before you move it back to database.`,
                    buttonYes: 'Yes, ARCHIVE',
                    buttonNo: "No, don't ARCHIVE"
                };
            case 'delete' :
                return {
                    title: `Are you sure to ${action.toUpperCase()} ${itemName.toUpperCase()}?`,
                    description: `If you confirm deletion of ${itemName.toUpperCase()} category from database it cannot be undone`,
                    buttonYes: 'Yes, DELETE',
                    buttonNo: "No, don't DELETE"
                };
            default:
                return {
                    title: `NO ACTION`,
                    description: `NO ACTION`,
                    buttonYes: 'Yes',
                    buttonNo: "No"
                };

        }
    };

    const closeConfirm = () => setConfirmIsOpen(false);

    const deleteItem = () => {
        (new ProductsApi()).deleteProduct(item).then(res => {
            setConfirmIsOpen(false);
            productsActions.getAllProducts()(dispatch);
            handleNotification(itemName, 'delete');
        })
    };

    const archiveItem = () => {
        (new ArchivesApi()).addArchive(item).then(res => {
            setConfirmIsOpen(false);
            handleNotification(itemName, 'archive');
            deleteItem();
        })
    };

    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Divider />
            <ListItem>
                <Grid container className={classes.paper}>
                    <Grid item container>
                        <Grid item>
                            <Link to={"/admin/products/"+item.itemNo} className={classes.link}>
                                <Box className={classes.image}>
                                    <img src={item.imgs[0]} className={classes.img} alt="Not Found"/>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={"/admin/products/"+item.itemNo} className={classes.link}>
                                <Hidden mdUp>
                                    <Typography variant="body2" className={classes.title}>{cutName(item.name, 22)}</Typography>
                                </Hidden>
                                <Hidden smDown >
                                    <Typography variant="body2" className={classes.title}>{cutName(item.name, 24)}</Typography>
                                </Hidden>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography component="div" variant="body2" >
                            <Link to={"/admin/products/"+item.itemNo} className={classes.link}>
                                <Box fontStyle="italic" fontSize={14} fontWeight="light" className={classes.art}>{item.itemNo}</Box>
                            </Link>
                        </Typography>
                    </Grid>
                    <Tooltip title="Archive" >
                        <ArchiveOutlinedIcon  aria-label="archive" className={classes.archiveBtn} onClick={(event) => {event.preventDefault(); return openConfirm('archive')}}/>
                    </Tooltip>
                    <Tooltip title="Delete" >
                        <DeleteOutlineOutlinedIcon aria-label="delete" className={classes.deleteBtn} onClick={(event) => {event.preventDefault(); return openConfirm('delete')}}/>
                    </Tooltip>
                </Grid>
            </ListItem>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText(action)} doFunction={() => action === 'archive' ? archiveItem() : deleteItem()} closeFunction={closeConfirm}/>
        </Grid>
    )
};
