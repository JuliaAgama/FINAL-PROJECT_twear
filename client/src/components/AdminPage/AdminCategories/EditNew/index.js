import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as gendersActions from '../../../../store/actions/genders';

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
        categoriesActions.getAllCategories()(dispatch);
        topCatsActions.getAllTopCats()(dispatch);
        gendersActions.getAllGenders()(dispatch);
    }, [dispatch]);

    const ref = useRef(null);
    const timeout = 2000;

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

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

        // for category:
        if (categoryName) {
            if(checkDoubles(catsBase, formData)) {
                return false;
            };
            if (!formData.genders || formData.genders.length === 0) {
                setWarningIsOpen(true);
                setWarningText({title: 'Item cannot be saved', description: 'Choose at least one gender '});
                return false;
            } 
            if (!formData.itemNo || formData.itemNo === '') {
                setWarningIsOpen(true);
                setWarningText({title: 'Item cannot be saved', description: 'Enter itemNo'});
                return false;
            } 
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
                // topCatsActions.getAllTopCats()(dispatch);
                ref.current(`Top category ${formData.name.toUpperCase()} has been saved!`);
        }

        setTimeout(() => {
            return history.push("/admin/categories");
            // window.location.assign(`/admin/categories`);
        }, timeout)
    };

    return (
        <>
        <div className="m-5">
            <CategoryForm
                categoryName={categoryName}
                topCatName={topCatName}
                item={getItem()}
                displayAdditional={displayAdditional}
                topCatsBase={topCatsBase}
                gendersBase={gendersBase}
                onSubmitHandler={onSubmitHandler}
            />
            <Link to={`/admin/categories`}>
                <button className="btn btn-secondary text-uppercase m-5">Back</button>
            </Link>
        </div>
        <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
};
