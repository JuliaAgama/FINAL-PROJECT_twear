import React from 'react';
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import useStyles from './useStyles';

export default props => {

    const onChange = event => {
    };

    const onSubmit = event => {
        event.preventDefault();
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid className={classes.justify}>
                        <TextField
                            required
                            id="title"
                            label="Title"
                            name='title'
                            autoFocus
                            onChange={onChange}
                            defaultValue="New Arrival"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth={true}
                            variant="outlined"
                            className={classes.btn}
                            onClick={onSubmit}
                        > {`SAVE`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Typography>
    )
};