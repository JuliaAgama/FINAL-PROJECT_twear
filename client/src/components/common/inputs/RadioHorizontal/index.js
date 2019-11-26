import React from 'react';

import useStyles from './useStyles';

import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


export default props => {

    const {legend, listArray, checkedCondition, onChange } = props;

    const handleChange = () => {
        onChange();
    };

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
                    control={<Radio />}
                    label={item.name}
                    labelPlacement="bottom"
                    checked={checkedCondition(item._id)}
                    onChange={handleChange}
                />
            )}
            </RadioGroup>
        </FormControl>
    )
};
