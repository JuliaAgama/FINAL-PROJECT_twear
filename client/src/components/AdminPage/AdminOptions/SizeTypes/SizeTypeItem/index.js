import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sizeTypesActions from '../../../../../store/actions/sizeTypes';
import SizeTypesApi from '../../../../../services/SizeTypes';
import SizesApi from '../../../../../services/Sizes';

import { Grid, TextField, Tooltip, IconButton } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';

import WarningModal from '../../../../common/messages/WarningModal';
import ConfirmModal from '../../../../common/messages/ConfirmModal';
import Sizes from '../../Sizes';


export default props => {

    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const sizeTypesList = useSelector(state => state.sizeTypes.sizeTypes);

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

    // handle saving sizeType:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});

    const checkDoubles = () => {
        const sizeTypesListBesidesItem = sizeTypesList.filter(el => el._id !== formData._id);
        if( sizeTypesListBesidesItem.some(el => el.name === formData.name)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Set of Sizes with name ${formData.name} already exists!`});
            return true;
        };
        return false;
    };

    const checkEmptyName = () => {
        if (formData.name === '' || !formData.name) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Set of Sizes MUST have name!`});
            return true;
        };
        return false;
    };

    const saveSizeType = event => {
        event.preventDefault();
        if( !checkEmptyName() && !checkDoubles()) {
            formData._id ?
            (new SizeTypesApi()).updateSizeType(formData).then(res => {
                handleNotification(formData.name, 'saved');
                sizeTypesActions.getAllSizeTypes()(dispatch);
            }) :
            (new SizeTypesApi()).addSizeType(formData).then(res => {
                handleNotification(formData.name, 'saved');
                sizeTypesActions.getAllSizeTypes()(dispatch);
            })
        }
    };

    // handle deleting sizeType:
    const [sizesMatched, setSizesMatched] = useState(null);
    useEffect(() => {
        (new SizesApi()).getSizesByMatch({sizeType: item._id}).then(res => setSizesMatched(res));
        return () => {
            setSizesMatched(null);
        }
    }, [item]);

    const checkMatchingSizes = () => {
        if(sizesMatched && sizesMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({title: `Cannot delete ${formData.name.toUpperCase()} Set of Sizes!`, description: `It contains sizes: ${sizesMatched.map(el => `"${(el.name.charAt(0).toUpperCase()+el.name.slice(1))}"`).join(', ')}!`});
            return true;
        };
        return false;
    };

    const closeWarning =() => setWarningIsOpen(false);

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);

    const openConfirm = event => {
        event.preventDefault();
        if (!checkMatchingSizes()) {
            setConfirmIsOpen(true);
        }
    };

    const confirmText = {
        title: `Are you sure to DELETE ${formData.name.toUpperCase()} Set of Sizes?`,
        description: `If you confirm deletion of ${formData.name.toUpperCase()} Set of Sizes from database it cannot be undone`,
        buttonYes: 'Yes, DELETE',
        buttonNo: "No, don't DELETE"
    };

    const closeConfirm = () => setConfirmIsOpen(false);

    const deleteSizeType = () => {
        (new SizeTypesApi()).deleteSizeType(formData).then(res => {
            setConfirmIsOpen(false);
            handleNotification(formData.name, 'deleted');
            sizeTypesActions.getAllSizeTypes()(dispatch);
        })
    };

    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} lg={4} className={classes.paper}>
                <form autoComplete="off">
                    <Grid container className={classes.container} spacing={1}>
                        <Grid item xs={6}>
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
                        <Grid item xs={3}>
                            <Tooltip title="Save" >
                                <IconButton aria-label="save" className={formData.name === item.name ? classes.saveBtn : classes.saveBtnFilled} onClick={saveSizeType}>
                                    <PublishIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={3}>
                        <Tooltip title="Delete" >
                            {item._id ?
                                <IconButton aria-label="delete" className={classes.deleteBtn} onClick={openConfirm}>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton> :
                                <></>
                            }
                        </Tooltip>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </form>
                <Grid container>
                    <Sizes handleNotification={handleNotification} sizeTypeId={item._id}/>
                </Grid>
            </Grid>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteSizeType} closeFunction={closeConfirm}/>
        </>
    )
};
