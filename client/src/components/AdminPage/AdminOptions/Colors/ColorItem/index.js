import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../../store/actions/colors';
import ColorsApi from '../../../../../services/Colors';
import ProductsApi from '../../../../../services/Products';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

import SaveButton from '../../../../common/buttons/Save';
import DeleteButton from '../../../../common/buttons/Delete';
import WarningModal from '../../../../common/messages/WarningModal';
import ConfirmModal from '../../../../common/messages/ConfirmModal';


export default props => {

    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const colorsList = useSelector(state => state.colors.colors)

    const [color, setColor] = useState(item.cssValue);
    const [formData, setFormData] = useState({_id: '', name: ''});

    useEffect(()=> {
        setFormData(item);
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

    const saveColor = event => {
        event.preventDefault();
        if( !checkDoubles()) {
            (new ColorsApi()).updateColor(formData).then(res => {
                handleNotification(formData.name, 'saved');
                colorsActions.getAllColors()(dispatch);
            })
        }
    };

    // handle deleting color:
    const [productsMatched, setProductsMatched] = useState(null);
    useEffect(() => {
        (new ProductsApi()).getProductsByMatch({color: item._id}).then(res => setProductsMatched(res));
    }, [item]);

    const checkMatchingProducts = () => {
        if(productsMatched && productsMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({title: `Cannot delete ${formData.name.toUpperCase()} color!`, description: `It is used in products: ${productsMatched.map(el => `"${(el.name.charAt(0).toUpperCase()+el.name.slice(1))}"`).join(', ')}!`});
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
            <Grid item xs={6} lg={4} xl={3} className={classes.wrapper}>
                <form autoComplete="off">
                    <Grid container className={classes.verticalCenter}>
                        <Grid item xs={1}>
                            <input
                                className={classes.colorInput}
                                id={item._id}
                                type="color"
                                name={'cssValue'}
                                value={color}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
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
                            <SaveButton
                                onClick={saveColor}
                                size="small"
                                className={formData.name === item.name && formData.cssValue === item.cssValue ? '' : 'fabGreenFilled' }/>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={1}>
                            <DeleteButton
                                onClick={openConfirm}
                                size="small"/>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </form>
            </Grid>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteColor} closeFunction={closeConfirm}/>
        </>
    )
};
