import React, { useState } from 'react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


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
