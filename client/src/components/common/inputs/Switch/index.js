import React, { useState } from 'react';

import { Switch, FormControl, FormControlLabel} from '@material-ui/core';


export default props => {

    const {label, name} = props;

    const [checked, setChecked] = useState(true);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    return (
        <FormControl component="fieldset">
            <FormControlLabel
                checked={checked}
                onChange={handleChange}
                value={name}
                name={name}
                control={<Switch color="primary" />}
                label={label}
                labelPlacement="top"
            />
        </FormControl>
    );
};
