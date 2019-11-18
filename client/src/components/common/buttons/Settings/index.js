import React from 'react';

import useStyles from './useStyles';

import Icon from '@mdi/react';
import { mdiMessageSettingsVariantOutline } from '@mdi/js';

export default  props => {

    const classes = useStyles();

    return (
        <Icon
            path={mdiMessageSettingsVariantOutline}
            title={props.title}
            size={props.size}
            color={props.color}
            className={classes.fixed}
            onClick={props.onClick}
        />
    )
};
