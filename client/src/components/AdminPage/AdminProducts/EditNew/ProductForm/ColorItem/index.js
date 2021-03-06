import React, { useState, useEffect } from 'react';

import {  Checkbox, FormControlLabel, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


export default props => {

    const { item, formData, optionItem, onChange } = props;

    const ColoredCheckbox = withStyles({
        root: {
            color: item.cssValue === '#ffffff' ? '#999' : item.cssValue,
            '&$checked': {
                color: item.cssValue === '#ffffff' ? '#999' : item.cssValue,
            },
        },
        checked: {},
    })(props => <Checkbox color="default" {...props} />);

    const [colorIsLocked, setColorIsLocked] = useState(false);

    useEffect(()=> {
        if (item && optionItem && optionItem.sizes) {
            optionItem.sizes.some(el => parseInt(el.quantity) > 0) || (optionItem.imgsColor && optionItem.imgsColor.some(el => el && el !== '')) ?
            setColorIsLocked(true) : setColorIsLocked(false);
        }
    },[item, optionItem]);

    return (
        colorIsLocked ?
        <Tooltip title="Cannot unselect, pictures or products in storage exist">
            <FormControlLabel
                control={
                    <ColoredCheckbox
                        name='colors'
                        id={item._id}
                        value={item._id}
                        checked={true}
                    />}
                label={item.name}
            />
        </Tooltip> :
        <FormControlLabel
            control={
                <ColoredCheckbox
                    name='colors'
                    id={item._id}
                    value={item._id}
                    checked={
                        formData.colors && formData.colors[0] && formData.colors.some(el => el.color._id === item._id) ? true : false}
                    onChange={onChange}
                />}
            label={item.name}
        />
    )
};
