import React, {useEffect, useState} from 'react';
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import useStyles from './useStyles';

export default props => {

    const {setExpanded} = props;
    const [title, setTitle] = useState("");

    useEffect(() => {
        let data = localStorage.getItem('Title');
        if (data) {
            setTitle(data)
        }
    }, []);

    const onChange = event => {
        setTitle(event.target.value)
    };

    const save = () => {
        localStorage.setItem('Title', title)
        setExpanded({title: false})
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
                            value={title}
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
                            onClick={save}
                        > {`SAVE`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Typography>
    )
};