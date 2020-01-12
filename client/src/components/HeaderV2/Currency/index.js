import React, {useState} from "react";

import { ClickAwayListener, Container } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrency} from "../../../store/actions/currency";

import useStyles from "./useStyles";


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
};

export default () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const [isVisible, setVisibility] = useState(false);
    const initial = setCurrentCurrency(currentCurrency);
    const [isChosen, setChosen] = useState(initial);

    const handleClickAway = () => setVisibility(false);

    const handleClickOpen = () => {
        setVisibility(true)
    };

    const clickHandler = event => {
        setChosen(setCurrentCurrency(event.target.textContent));
        dispatch(changeCurrency(event.target.textContent))
    };




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
        </React.Fragment>
    );
};
