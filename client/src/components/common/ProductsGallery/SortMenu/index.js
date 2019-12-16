import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import { useHistory } from "react-router-dom";

function clearQueryString(queryString) {
    const queryItems = queryString.split('&');
    const withoutSortItem = queryItems.map(item => {
        if (item.startsWith('sort')) {
            return ;
        }
        return item;
    });
    let result = withoutSortItem.join('&');
    if (result.endsWith('&')) {
        result = result.slice(0, result.length-1);
    }
    return result;
}

export default function SimpleSelect(props) {
    const {mobile, colors, queryString} = props;
    const classes = useStyles();
    const history = useHistory();
    const [color, setColor] = useState('');
    const [sortRule, setSortRule] = useState(0);
    const handleChangeColor = event => {
        setColor(event.target.value);
    };
    const handleChangeSortRule = event => {
        let sortQuery = clearQueryString(queryString);
        sortQuery += event.target.value;
        setSortRule(event.target.value);
        return history.push(`/categories/${sortQuery}`);
    };

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
                    <option value={0} disabled>
                        Sort
                    </option>
                    <option value="&sort=+name">Alphabetically, A-Z</option>
                    <option value="&sort=-name">Alphabetically, Z-A</option>
                    <option value="&sort=+price">Price, low to high</option>
                    <option value="&sort=-price">Price, high to low</option>
                    <option value="&sort=-date">Date, new to old</option>
                    <option value="&sort=+date">Date, old to new</option>
                </Select>
            </FormControl>
        </Container>
    );
}
