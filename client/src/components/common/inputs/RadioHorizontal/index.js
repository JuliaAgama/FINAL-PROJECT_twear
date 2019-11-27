import React, { useState } from 'react';

import useStyles from './useStyles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


export default props => {

    const {legend, listArray, checkedCondition, onChange } = props;

    const classes = useStyles();

    return (
        <FormControl component="fieldset" >
            <Box textAlign="center">
                <FormLabel component="legend" >{legend}</FormLabel>
                <RadioGroup
                    aria-label={`radio-group-${legend.replace(/ /gi,'-')}`}
                    name={legend.replace(/ /gi,'-')}
                >
                <Grid container>
                    {listArray.map(item =>
                        <Grid
                            item xs={4}
                            key={item._id}
                        >
                            <FormControlLabel
                                id={item._id}
                                value={item._id}
                                control={<Radio />}
                                label={item.name}
                                labelPlacement="bottom"
                                checked={checkedCondition(item._id)}
                                onChange={onChange}
                            />
                        </Grid>
                    )}
                </Grid>
                </RadioGroup>
            </Box>
        </FormControl>
    )
};
