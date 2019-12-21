import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Link, useHistory } from "react-router-dom";

import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';

import { Typography, Box } from '@material-ui/core';

import useStyles from "./useStyles";

import CategoryForm from './CategoryForm';
import WarningModal from '../../../common/messages/WarningModal';
import Notification from '../../../common/messages/Notification';


export default props => {

    const history = useHistory();

    const categoryName = props.match.params.categoryName;
    const topCatName = props.match.params.topCatName;

    // show additional fields only for category form, not for topCat form
    let [displayAdditional, setDisplayAdditional] = useState('displayNone');
    useEffect(() => {
        if(categoryName) {setDisplayAdditional('displayBlock');}
    },[categoryName]);

    // get data (that are in need for the form) from data base:
    const dispatch = useDispatch();

    const getTopCatsList = () => {
        topCatsActions.getAllTopCats()(dispatch);
    };

    const getCategoriesList = () => {
        categoriesActions.getAllCategories()(dispatch);
    };

    const getGendersList = () => {
        gendersActions.getAllGenders()(dispatch);
    };

    const catsBase = useSelector(state => state.categories.categories);
    const topCatsBase = (useSelector(state => state.topCats.topCats));
    const gendersBase = useSelector(state => state.genders.genders);

    const getItem = () => {
        if (catsBase && categoryName) {
            return catsBase.filter(el => el.name === categoryName)[0];
        }
        if (topCatsBase && topCatName) {
            return topCatsBase.filter(el => el.name === topCatName)[0];
        }
        return {};
    };

    useEffect(() => {
        getCategoriesList();
        getTopCatsList();
        getGendersList();
        return () => {
            getCategoriesList();
            getTopCatsList();
            getGendersList();
        }
    }, [dispatch]);

    const ref = useRef(null);
    const timeout = 1500;

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

    const checkEmpty = field => {
        if(!field || field === '') {
            setWarningIsOpen(true);
            setWarningText({title: 'Item cannot be saved', description: `Set  all fields`});
            return true;
        }
        return false;
    };

    const checkDoubles = (existingList, formData) => {
        const listBesidesItem = existingList.filter(el => el._id !== formData._id);
        if( listBesidesItem.some(el => el.name.toLowerCase() === formData.name.toLowerCase())) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Category with name ${formData.name.toUpperCase()} already exists!`});
            return true;
        };
        if( categoryName && listBesidesItem.some(el => el.itemNo === formData.itemNo)) {
            setWarningIsOpen(true);
            setWarningText({title: 'Cannot save!', description: `Category with itemNo "${formData.itemNo}" already exists!`});
            return true;
        };
        return false;
    };

    const onSubmitHandler = formData => {

        if (checkEmpty(formData.name) ) {
            return false;
        };

        // for category:
        if (categoryName) {
            if( checkEmpty(formData.itemNo) || checkEmpty(formData.topCategory) || checkEmpty(formData.gender) ) {
                return false
            };
            if(checkDoubles(catsBase, formData)) {
                return false;
            };
            categoryName.includes('newCategory') ?
                categoriesActions.addCategory(formData)(dispatch) :
                categoriesActions.updateCategory(formData)(dispatch);
                ref.current(`Category ${formData.name.toUpperCase()} has been saved!`);

        // for top category:
        } else if (topCatName) {
            if(checkDoubles(topCatsBase, formData)) {
                return false;
            };
            topCatName === 'newTopCategory' ?
                topCatsActions.addTopCat(formData)(dispatch) :
                topCatsActions.updateTopCat(formData)(dispatch);
                ref.current(`Top category ${formData.name.toUpperCase()} has been saved!`);
        }

        setTimeout(() => {
            return history.push("/admin/categories");
        }, timeout)
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">Edit {(topCatName || (categoryName && categoryName.includes('newCategory') ? categoryName.slice(0, categoryName.indexOf('-')) : categoryName)).toUpperCase()}</Box>
            <Box p={2}>
                <CategoryForm
                    categoryName={categoryName}
                    topCatName={topCatName}
                    item={getItem()}
                    displayAdditional={displayAdditional}
                    catsBase={catsBase}
                    topCatsBase={topCatsBase}
                    gendersBase={gendersBase}
                    onSubmitHandler={onSubmitHandler}
                />
                <Link to={`/admin/categories`} className={classes.link}> {`<<   to Categories`} </Link>
            </Box>

            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </Typography>
    )
};
