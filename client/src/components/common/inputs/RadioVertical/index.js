import React from 'react';

import { FormLabel, FormControl, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    const {legend, listArray, checkedCondition, onChange } = props;

    const classes = useStyles();

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{legend}</FormLabel>
            <RadioGroup aria-label={`radio-group-${legend.replace(/ /gi,'-')}`} name={legend.replace(/ /gi,'-')}>
            {listArray.map(item =>
                <FormControlLabel
                    key={item._id}
                    id={item._id}
                    value={item._id}
                    name={item.name}
                    control={<Radio />}
                    label={item.name}
                    checked={checkedCondition(item._id)}
                    onChange={onChange}
                />
            )}
            </RadioGroup>
        </FormControl>
    )
};
