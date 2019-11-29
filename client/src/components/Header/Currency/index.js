import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Container from "@material-ui/core/Container";
import useStyles from "./useStyles";



export default function Currency() {

    const classes = useStyles();
    const [isVisible, setVisibility] = useState(false);
    const handleClickAway = () => setVisibility(false);


    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Button className={isVisible ? classes.btnSpan : classes.btn}
                        onClick={() => {setVisibility(true)}}>
                    {!isVisible ? 'Currency' :
                        (<Container>
                           <span  data-currency='USA' className={classes.span}>USA</span>
                           <span  data-currency='EUR' className={classes.span}>EUR</span>
                           <span  data-currency='UA' className={classes.span}>UA</span>
                        </Container>)}
                </Button>
            </ClickAwayListener>
        </React.Fragment>
    );
};

