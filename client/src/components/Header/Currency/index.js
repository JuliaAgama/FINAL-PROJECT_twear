import React, {useState} from "react";
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
                <Container className={classes.container}
                        onClick={() => {setVisibility(true)}}>
                    {!isVisible ? 'Currency' :
                        (<>
                           <span  data-currency='USA'>USA</span>
                           <span  data-currency='EUR'>EUR</span>
                           <span  data-currency='UA'>UA</span>
                        </>)
                        }
                </Container>
            </ClickAwayListener>
        </React.Fragment>
    );
};

