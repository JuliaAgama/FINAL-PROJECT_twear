import React from "react";
import TextField from "@material-ui/core/TextField";

export function renderTextField({ input, label, meta: { touched, error }, ...custom }) {
    return     <TextField
                error={touched && error}
                helperText={touched && error}
                fullWidth={true}
                margin="normal"
                label={label}/>
}