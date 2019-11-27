import React from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export function renderTextField({ input, label, type, meta: { touched, error, invalid }, ...custom }) {
    return     <TextField   error={touched && invalid}
                            helperText={touched && error}
                            fullWidth={true}
                            margin="normal"
                            label={label}
                            type={type}
                            {...input}
                            {...custom}
                />
}

export function renderRadioGroup({ input, ...rest }){
    return   <RadioGroup {...input}
                         {...rest}
                         value={input.value}
                         onChange={(event, value) => input.onChange(value)}
                         aria-label="position"
                         name="position"
                         row
    />
}

export function renderDate({ input: {onChange}, label, type, className}) {
    return  <TextField fullWidth={true}
                       type={type}
                       margin='normal'
                       id="date"
                       label={label}
                       onChange={onChange}
                       defaultValue="2000-01-01"
                       className={className}/>
}

export function renderCheckbox({ input, label, className }) {
    return <FormControlLabel
        control={<Checkbox  color="default"/>}
        label={label}
        checked={input.value ? true : false}
        onChange={input.onChange}
        className={className}
    />
}
