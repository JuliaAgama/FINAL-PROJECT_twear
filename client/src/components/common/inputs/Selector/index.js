import React, { useState, useEffect, useRef } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './useStyles';


export default props => {

    const {selectorName, selectorArr, onChange} = props;

    const [selectedId, setSelectedId] = useState('');

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        onChange(event.target.value);
        setSelectedId(event.target.value);
    };

    const classes = useStyles();

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor={`selector-form-${selectorName.replace(/ /gi,'-')}`}>
                    {selectorName}
                </InputLabel>
                <Select
                    native
                    value={selectedId}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    inputProps={{
                    name: selectorName.replace(/ /gi,'-'),
                    id: `selector-form-${selectorName.replace(/ /gi,'-')}`,
                    }}
                >
                    <option value="" />
                    {selectorArr.map( item => (
                        <option
                            key={item._id}
                            value={item._id}
                        >
                            {item.name.charAt(0).toUpperCase()+item.name.slice(1)}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div>
        );
};