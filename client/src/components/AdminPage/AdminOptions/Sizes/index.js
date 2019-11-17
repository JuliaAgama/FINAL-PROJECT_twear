import React from 'react';
// import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

// import TextField from '@material-ui/core/TextField';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControl from '@material-ui/core/FormControl';
// import Checkbox from '@material-ui/core/Checkbox';


export default props => {
    const classes = useStyles();


    // let [formData, setFormData] = useState({});

    return (
        <>
            <div className={classes.wrapper}>
                <form
                    autoComplete="off"
                    //onSubmit={onSubmit}
                >
                    <Grid container className={classes.paper}>
                        <Grid item className={classes.justify}>
                            Manage sizes here
                        </Grid>
                    </Grid>

                    <Grid container className={classes.paper}>
                        <Grid item xs={6}>
                            Manage sizes here
                        </Grid>
                        <Grid item xs={6}>
                            Manage sizes here
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )
}
