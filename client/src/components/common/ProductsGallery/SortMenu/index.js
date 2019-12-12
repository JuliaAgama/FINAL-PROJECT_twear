import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";


export default function SimpleSelect(props) {
    const classes = useStyles();
    const [color, setColor] = useState('');
    const [sortRule, setSortRule] = useState('');
    const handleChangeColor = event => {
        setColor(event.target.value);
    };
    const handleChangeSortRule = event => {
        setSortRule(event.target.value);
    };


    const {mobile, colors} = props;
    const colorsSet = Array.from(colors).map((item, index) => <option key = {index} value={index}>{item}</option>)

    return (
        <Container maxWidth={false} className={classes.main}>
            <FormControl className={mobile ? classes.formControl : classes.hide}>
                <Select native value={color} onChange={handleChangeColor} displayEmpty className={classes.selectEmpty}>
                    <option value="" disabled>
                        All Color
                    </option>
                    {colorsSet}
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <Select native value={sortRule} onChange={handleChangeSortRule} displayEmpty className={classes.selectEmpty}>
                    <option value="" disabled>
                        Sort
                    </option>
                    <option value={10}>Alphabetically, A-Z</option>
                    <option value={10}>Alphabetically, Z-A</option>
                    <option value={20}>Price, low to high</option>
                    <option value={20}>Price, high to low</option>
                    <option value={30}>Date, new to old</option>
                    <option value={30}>Date, old to new</option>
                </Select>
            </FormControl>
        </Container>
    );
}
