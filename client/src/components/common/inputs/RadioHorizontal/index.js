import React from 'react';

import { Box, Grid, FormLabel, FormControl, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';

// import useStyles from './useStyles';


export default props => {

    const {legend, listArray, checkedCondition, onChange } = props;

    // const classes = useStyles();

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
                                name={item.name}
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
