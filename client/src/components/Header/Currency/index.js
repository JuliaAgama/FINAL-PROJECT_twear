import React, {useState} from "react";

import { ClickAwayListener, Container } from "@material-ui/core/";
import useStyles from "./useStyles";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrency} from "../../../store/actions/currency";


// import ModalQR from '../../common/ModalQR';

const setCurrentCurrency = currentCurrency => {
    const stateObj = {USD : false, EUR : false, UAH : false};
    for (const key in stateObj) {
        if (key === currentCurrency) {
            stateObj[key] = true;
        } else {
            stateObj[key] = false;
        }
    }
    return stateObj;
}

export default () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const [isVisible, setVisibility] = useState(false);
    const initial = setCurrentCurrency(currentCurrency);
    const [isChosen, setChosen] = useState(initial);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleClickAway = () => setVisibility(false);

    const handleClickOpen = () => {
        setVisibility(true)
        // setModalIsOpen(true);
    };

    const clickHandler = event => {
        setChosen(setCurrentCurrency(event.target.textContent));
        dispatch(changeCurrency(event.target.textContent))
    };

    // const closeModal = () => {
    //     setModalIsOpen(false)
    // };


    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Container className={classes.container}
                    onClick={handleClickOpen}>
                    {!isVisible ? 'Currency' :
                        (<>
                            <span  className={isChosen.USD ? classes.currentCurrency : classes.currency} data-currency='USD' onClick={clickHandler}>USD</span>
                            <span  className={isChosen.EUR ? classes.currentCurrency : classes.currency}data-currency='EUR' onClick={clickHandler}>EUR</span>
                            <span  className={isChosen.UAH ? classes.currentCurrency : classes.currency} data-currency='UAH' onClick={clickHandler}>UAH</span>
                        </>)
                    }
                </Container>
            </ClickAwayListener>
            {/* <ModalQR
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            /> */}
        </React.Fragment>
    );
};
