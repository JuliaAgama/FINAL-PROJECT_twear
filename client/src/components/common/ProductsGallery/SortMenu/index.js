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

function createSortQueryString(sortingVariantValue, sortQuery) {
    switch (+sortingVariantValue) {
        case 1 :
            sortQuery += "&sort=+name";
            break;
        case 2 :
            sortQuery += "&sort=-name";
            break;
        case 3 :
            sortQuery += "&sort=+price";
            break;
        case 4 :
            sortQuery += "&sort=-price";
            break;
        case 5 :
            sortQuery += "&sort=-date";
            break;
        case 6 :
            sortQuery += "&sort=+date";
            break;
    }
    return sortQuery;
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
        sortQuery = createSortQueryString(event.target.value, sortQuery);
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
                    <option value={1}>Alphabetically, A-Z</option>
                    <option value={2}>Alphabetically, Z-A</option>
                    <option value={3}>Price, low to high</option>
                    <option value={4}>Price, high to low</option>
                    <option value={5}>Date, new to old</option>
                    <option value={6}>Date, old to new</option>
                </Select>
            </FormControl>
        </Container>
    );
}
