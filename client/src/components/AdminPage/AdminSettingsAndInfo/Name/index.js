import React, {useEffect, useState} from 'react';
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import useStyles from './useStyles';

export default props => {

    const [name, setName] = useState("");

    useEffect(() => {
        let data = localStorage.getItem('CustomId');
        if (data) {
            setName(data)
        }
    }, []);

    const onChange = event => {
        setName(event.target.value)
    };

    const onSubmit = event => {
        event.preventDefault();
        localStorage.setItem('CustomId', name)
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid className={classes.justify}>
                        <TextField
                            required
                            id="name"
                            label="Name"
                            name='name'
                            autoFocus
                            onChange={onChange}
                            value={name}
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