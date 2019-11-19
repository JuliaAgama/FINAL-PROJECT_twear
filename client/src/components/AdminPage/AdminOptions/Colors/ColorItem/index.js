import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../../store/actions/colors';
import * as productsActions from '../../../../../store/actions/products';

// import ColorsApi from '../../../../../services/Colors';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

import SaveButton from '../../../../common/buttons/Save';
import DeleteButton from '../../../../common/buttons/Delete';
import WarningModal from '../../../../common/messages/WarningModal';

// import ConfirmModal from '../../../../common/messages/ConfirmModal';


export default props => {
    const classes = useStyles();
    const {item, handleNotification} = props;
    const colorsList = useSelector(state => state.colors.colors)

    const dispatch = useDispatch();

    const [color, setColor] = useState(item.cssValue);
    const [formData, setFormData] = useState({});

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
        if( colorsListBesidesItem.some((el) => el.name === formData.name)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Color with name ${formData.name} already exists!`});
            return true;
        };
        if( colorsListBesidesItem.some((el) => el.cssValue === formData.cssValue)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Color with cssValue ${formData.cssValue} already exists!`});
            return true;
        };
        return false;
    };
    const closeWarning =() => setWarningIsOpen(false)

    const saveColor = event => {
        event.preventDefault();
        if( !checkDoubles()) {
            colorsActions.updateColor(formData)(dispatch);
            // handleNotification((formData.name || item.name), 'saved in database');
        }
    };

    // useEffect(() => {
    //     productsActions.getProductsBySearch(item._id)(dispatch);
    // }, [dispatch]);

    // const productsBySearch = useSelector(state => state.products.products);


    const checkToDelete = event => {
        event.preventDefault();
        console.log('checkToDelete');
    };


    const deleteColor = event => {
        event.preventDefault();
        colorsActions.deleteColor(formData)(dispatch);
        setFormData({...formData, _id: null})
        handleNotification((formData.name || item.name), 'deleted from database');

        console.log('delete color');
    };

    //     console.log('colorBase recieved from dataBase: ', colorsBase);
    //     console.log('formData current: ', formData);


    return (
        <React.Fragment>
            {/* {colorItem && ( */}
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
                                    onClick={deleteColor}
                                    //onClick={checkToDelete}
                                    size="small"/>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </form>
                </Grid>
            {/* )} */}
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
        </React.Fragment>
    )
}
