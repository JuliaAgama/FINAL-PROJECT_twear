import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sizesActions from '../../../../../store/actions/sizes';
import SizesApi from '../../../../../services/Sizes';
import ProductsApi from '../../../../../services/Products';
import ArchivesApi from '../../../../../services/Archives';

import { Grid, TextField, Tooltip } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';

import WarningModal from '../../../../common/messages/WarningModal';
import ConfirmModal from '../../../../common/messages/ConfirmModal';


export default props => {

    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const sizesList = useSelector(state => state.sizes.sizes);

    const [formData, setFormData] = useState({_id: '', name: ''});

    useEffect(()=> {
        setFormData(item);
        return () => {
            setFormData({_id: '', name: ''});
        }
    },[item]);

    const onChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // handle saving size:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});

    const checkDoubles = () => {
        const sizesListBesidesItem = sizesList.filter(el => el._id !== formData._id);
        if( sizesListBesidesItem.some(el => el.name === formData.name)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Size ${formData.name} already exists!`});
            return true;
        };
        return false;
    };

    const checkEmptyName = () => {
        if (formData.name === '' || !formData.name) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Size MUST have name!`});
            return true;
        };
        return false;
    };

    const saveSize = event => {
        event.preventDefault();
        if( !checkEmptyName() && !checkDoubles()) {
            formData._id ?
            (new SizesApi()).updateSize(formData).then(res => {
                handleNotification(formData.name, 'saved');
                sizesActions.getAllSizes()(dispatch);
            }) :
            (new SizesApi()).addSize(formData).then(res => {
                handleNotification(formData.name, 'saved');
                sizesActions.getAllSizes()(dispatch);
            })
        }
    };

    // handle deleting size:
    const [productsMatched, setProductsMatched] = useState([]);
    useEffect(() => {
        (new ProductsApi()).getProductsByMatch({size: item._id}).then(res => setProductsMatched(prodMat =>[...prodMat, ...res]));
            (new ArchivesApi()).getArchivesByMatch({size: item._id}).then(res => setProductsMatched(prodMat =>[...prodMat, ...res]));
        return () => {
            setProductsMatched([]);
        }
    }, [item]);
    // }, [item, productsMatched]);

    const checkMatchingProducts = () => {
        if(productsMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({
                title: `Cannot delete ${formData.name.toUpperCase()} size!`,
                description: `It is used in products: ${productsMatched.map(el => `"${(el.name.charAt(0).toUpperCase()+el.name.slice(1))}" (${el.itemNo})`).join(', ')}!`
        });
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
        title: `Are you sure to DELETE ${formData.name.toUpperCase()} size?`,
        description: `If you confirm deletion of ${formData.name.toUpperCase()} size from database it cannot be undone`,
        buttonYes: 'DELETE, I am SURE',
        buttonNo: "No, don't DELETE"
    };

    const closeConfirm = () => setConfirmIsOpen(false);

    const deleteSize = () => {
        (new SizesApi()).deleteSize(formData).then(res => {
            setConfirmIsOpen(false);
            handleNotification(formData.name, 'deleted');
            sizesActions.getAllSizes()(dispatch);
        })
    };

    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} className={classes.wrapper}>
                <form autoComplete="off">
                    <Grid container className={classes.verticalCenter}>
                    <Grid item xs={2}></Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.textField}
                                required
                                id={item._id}
                                name={'name'}
                                onChange={onChange}
                                defaultValue={item.name}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="Save" >
                                <PublishIcon aria-label="save" className={formData.name === item.name ? classes.saveBtn : classes.saveBtnFilled} onClick={saveSize}/>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={1}>
                            {item._id ?
                            <Tooltip title="Delete" >
                                <DeleteOutlineOutlinedIcon aria-label="delete" className={classes.deleteBtn} onClick={openConfirm}/>
                            </Tooltip> :
                            <></>
                            }
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </form>
            </Grid>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteSize} closeFunction={closeConfirm}/>
        </>
    )
};
