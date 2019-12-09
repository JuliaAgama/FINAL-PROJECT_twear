import React from 'react';

import {  Checkbox, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export default props => {

    const { item, formData, onChange } = props;

    const ColoredCheckbox = withStyles({
        root: {
            color: item.cssValue === '#ffffff' ? '#999' : item.cssValue,
            '&$checked': {
                color: item.cssValue === '#ffffff' ? '#999' : item.cssValue,
            },
            },
            checked: {},
        })(props => <Checkbox color="default" {...props} />);


    return (
        <FormControlLabel
            control={
                <ColoredCheckbox
                    name='colors'
                    id={item._id}
                    value={item._id}
                    checked={formData.colors && formData.colors[0] && formData.colors.some(el => el.color._id === item._id) ? true : false}
                    onChange={onChange}
                />}
            label={item.name}
        />
    )
};
