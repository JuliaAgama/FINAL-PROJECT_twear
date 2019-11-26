import React from "react";
import TextField from "@material-ui/core/TextField";

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