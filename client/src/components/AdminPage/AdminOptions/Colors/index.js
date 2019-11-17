// import React from 'react';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../store/actions/colors';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import AddButton from '../../../common/buttons/Add';

import ColorItem from './useStyles';


export default props => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const colorsBase = useSelector(state => state.colors.colors);

    useEffect(() => {
        colorsActions.getAllColors()(dispatch);
    }, [dispatch]);

    // const [formData, setFormData] = useState([]);
    // useEffect(()=> {
    //     setFormData(colorsBase);
    // },[colorsBase]);

    // const [color, setColor] = useState('#333333');
    // const onChange = event => {
    //     if (event.target.name === 'cssValue') {
    //         setColor(event.target.value);
    //     };
    //     let updatedData = formData.map(el => {
    //         if (el._id !== event.target.id) {
    //             return el;
    //         } else {
    //             let newObj = {};
    //             for (let key in el) {
    //                 key === event.target.name ?
    //                     newObj[key] = event.target.value :
    //                     newObj[key] = el[key]
    //                 }
    //             return newObj;
    //         }
    //     });
    //     // console.log(updatedData);
    //     setFormData(updatedData)
    // };



    const addField = event => {
        event.preventDefault();
        console.log('hello');
    };

    // const onSubmit = event => {
        //     event.preventDefault();
        //     onSubmitHandler(formData);
        // };

        // console.log('colorBase recieved from dataBase: ', colorsBase);
        // console.log('formData current: ', formData);


    return (
        <>
            <div className={classes.wrapper}>
                <Grid container className={classes.paper}>
                    {colorsBase.map(item =>
                        <ColorItem item={item} key={item._id}/>
                    )}
                    <Grid item xs={6} lg={4} xl={3} className={classes.center}>
                        <Grid container>
                            <Grid item xs={3}>
                                <AddButton
                                    className='fabPink'
                                    onClick={addField}
                                    size="medium"/>
                            </Grid>
                            <Grid item xs={9}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
