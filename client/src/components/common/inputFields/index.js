import React from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PhoneInput from "react-phone-input-2";

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

export function renderRadioGroup({ input, meta: {error}, ...rest }){
    return(
            <FormControl error={true} component="fieldset">
                <RadioGroup {...input}
                                     {...rest}
                                     value={input.value}
                                     onChange={(event, value) => input.onChange(value)}
                                     aria-label="position"
                                     name="position"
                                     row
                />
                <FormHelperText>{error}</FormHelperText>
            </FormControl>
        )
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

export function renderCheckbox({ input, label, className, meta: {error} }) {
    return (
            <FormControl error={true} component="fieldset">
                <FormControlLabel control={<Checkbox  color="default"/>}
                                         label={label}
                                         checked={input.value ? true : false}
                                         onChange={input.onChange}
                                         className={className}
                />
                <FormHelperText>{error}</FormHelperText>
            </FormControl>
    )
}

export function renderPhoneNumber({ input: { onChange, value, onBlur }, className, style, meta: {error, invalid, touched }}) {
    return(
    <FormControl error={true} component="fieldset" className={className}>
        <PhoneInput containerStyle={{
                            marginTop: '30px',
                            marginBottom: '30px',
                            width: '100%'
                            }}
                           inputStyle={{width: '100%'}}
                           dropdownStyle={{width: '100%'}}
                           defaultCountry={'ua'}
                           onBlur={onBlur}
                           value={value}
                           isValid={() => {if (!touched) {return true} else if (touched && invalid) {return false} else return true} }
        />
        <FormHelperText className={style}>{error}</FormHelperText>
    </FormControl>
    )
}