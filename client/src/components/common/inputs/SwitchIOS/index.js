import React, { useState, useEffect } from 'react';

import Switch from '@material-ui/core/Switch';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const IOSSwitch = withStyles(theme => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});


export default props => {

    const {isChecked, labels, onChange} = props;

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if(isChecked) { setChecked(isChecked) }
    },[isChecked]);

    const [offOn, setOffOn] = useState({off: 'off', on: 'on'});
    useEffect(() => {
        if(labels) { setOffOn(labels) }
    },[labels]);

    const handleChange = event => {
        event.preventDefault();
        if (onChange) {
            onChange();
            setChecked(event.target.checked);
        } else {
            setChecked(event.target.checked);
        }
    };

    return (
        <>
        <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>{offOn.off}</Grid>
                <Grid item>
                    <IOSSwitch
                    checked={checked}
                    onChange={handleChange}
                    value={checked}
                />
                </Grid>
                <Grid item>{offOn.on}</Grid>
        </Grid>
        </>
    )
};
