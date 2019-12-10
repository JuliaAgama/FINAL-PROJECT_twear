import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import * as colorsActions from '../../../../../store/actions/colors';
import ColorsApi from '../../../../../services/Colors';
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
    const colorsList = useSelector(state => state.colors.colors)

    const [color, setColor] = useState(item.cssValue);
    const [formData, setFormData] = useState({_id: '', name: ''});

    useEffect(()=> {
        // let itemUnmounted = false;
        // if (!itemUnmounted) {
            setFormData(item);
        // };
        return () => {
            setFormData({_id: '', name: ''});
        }
    },[item]);

    const onChange = event => {
        if (event.target.name === 'cssValue') {
            setColor(event.target.value);
        };
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // handle saving color:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});

    const checkDoubles = () => {
        const colorsListBesidesItem = colorsList.filter(el => el._id !== formData._id);
        if( colorsListBesidesItem.some(el => el.name === formData.name)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Color with name ${formData.name} already exists!`});
            return true;
        };
        if( colorsListBesidesItem.some(el => el.cssValue === formData.cssValue)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Color with cssValue ${formData.cssValue} already exists!`});
            return true;
        };
        return false;
    };

    const checkEmptyName = () => {
        if (formData.name === '' || !formData.name) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Color MUST have name!`});
            return true;
        };
        return false;
    };

    const saveColor = event => {
        event.preventDefault();
        if( !checkEmptyName() && !checkDoubles()) {
            formData._id ?
            (new ColorsApi()).updateColor(formData).then(res => {
                handleNotification(formData.name, 'saved');
                colorsActions.getAllColors()(dispatch);
            }) :
            (new ColorsApi()).addColor(formData).then(res => {
                handleNotification(formData.name, 'saved');
                colorsActions.getAllColors()(dispatch);
            })
        }
    };

    // handle deleting color:
    const [productsMatched, setProductsMatched] = useState([]);

    useEffect(() => {
        // let itemUnmounted = false;
        // if (!itemUnmounted) {
            (new ProductsApi()).getProductsByMatch({color: item._id}).then(res => setProductsMatched([...productsMatched, ...res]));
            (new ArchivesApi()).getArchivesByMatch({color: item._id}).then(res => setProductsMatched([...productsMatched, ...res]));
        // };
        return () => {
            setProductsMatched([]);
        }

        // пробовала следующее, не сработало (везде примеры только с гет-запросами, а мне нужен пост-запрос).....

        // const CancelToken = axios.CancelToken;
        // const source = CancelToken.source();

        // const getProductsByMatch = item => {
        //     try {
        //         axios
        //         .post(`products/match`, item, { cancelToken: source.token })
        //         .then(res => setProductsMatched(res.data));
        //     } catch (err) {
        //         if (axios.isCancel(err)) {
        //             console.log("cancelled");
        //             return err.response.data; //?
        //         } else {
        //             throw err;
        //         }
        //     }
        // };
        // getProductsByMatch({color: item._id});

        // return () => {
        //     source.cancel();
        // };
    }, [item]);
    // }, [item, productsMatched]);

    const checkMatchingProducts = () => {
        if(productsMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({
                title: `Cannot delete ${formData.name.toUpperCase()} color!`,
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
        title: `Are you sure to DELETE ${formData.name.toUpperCase()} color?`,
        description: `If you confirm deletion of ${formData.name.toUpperCase()} color from database it cannot be undone`,
        buttonYes: 'DELETE, I am SURE',
        buttonNo: "No, don't DELETE"
    };
    const closeConfirm = () => setConfirmIsOpen(false);

    const deleteColor = () => {
        (new ColorsApi()).deleteColor(formData).then(res => {
            setConfirmIsOpen(false);
            handleNotification(formData.name, 'deleted');
            colorsActions.getAllColors()(dispatch);
        });
    };

    const classes = useStyles();

    return (
        <>
        <Grid item xs={12} sm={6} lg={4}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid item xs={12} sm container className={classes.container}>
                        <Grid item xs={3}>
                            <input
                                id={item._id}
                                type="color"
                                name={'cssValue'}
                                value={color}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <TextField
                                required
                                id={item._id}
                                name={'name'}
                                onChange={onChange}
                                defaultValue={item.name}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm container className={classes.container}>
                        <Grid item>
                            <Tooltip title="Save" >
                                <PublishIcon aria-label="save" className={formData.name === item.name && formData.cssValue === item.cssValue ? classes.saveBtn : classes.saveBtnFilled} onClick={saveColor}/>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            {item._id ?
                            <Tooltip title="Delete" >
                                <DeleteOutlineOutlinedIcon aria-label="delete" className={classes.deleteBtn} onClick={openConfirm}/>
                            </Tooltip> :
                            <></>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Grid>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteColor} closeFunction={closeConfirm}/>
        </>
    )
};
