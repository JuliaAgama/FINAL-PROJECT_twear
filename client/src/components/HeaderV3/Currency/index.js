import useStyles from "./useStyles";
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";



export default function Currency() {

    const classes = useStyles();
    const [isVisible, setVisibility] = useState(false);
    const handleClickAway = () => setVisibility(false);
    const [selectedValue, setSelectedValue] = useState('USD');

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };

    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Button className={isVisible ? classes.btnWithRadio : classes.btn}
                        onClick={() => {setVisibility(true)}}>
                    {!isVisible ? 'Currency' :
                        (<>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="position" name="position" value={selectedValue} onChange={handleChange} row>
                                    <FormControlLabel
                                        control={<Radio
                                            value="USD"
                                            color="default"
                                            icon={<RadioButtonUncheckedIcon fontSize="small" />}
                                            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                                        />}
                                        label="USD"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio
                                            value="EUR"
                                            color="default"
                                            icon={<RadioButtonUncheckedIcon fontSize="small" />}
                                            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                                        />}
                                        label="EUR"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio
                                            value="UA"
                                            color="default"
                                            icon={<RadioButtonUncheckedIcon fontSize="small" />}
                                            checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                                        />}
                                        label="UA"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </>)
                    }
                </Button>
            </ClickAwayListener>
        </React.Fragment>
    );
}