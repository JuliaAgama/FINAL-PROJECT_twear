import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => (
    {
        root: {
            padding: '1rem',
            flexGrow: 1
        },
        paper: {
            marginTop: '1rem',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            textTransform: 'capitalize'
        },
    }
));


export default props => {

    // const{productId} = props;

    // let [state, setState] = useState('something');

    // useEffect(()=> {
    //     if(productId === 'newProduct') {
    //         setState('another');
    //     } else {
    //         setState('hmmmm...');
    //     }
    // },[])



    console.log(state);

    return (
        <>
            <h1> THIS IS FORM FOR PRODUCT</h1>
            <div className='container product-form'>

                <form className="text-center border border-light p-5" action="#">

                    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Title"/>

                    <div className="form-group">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"/>
                    </div>

                    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Price"/>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload photo</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>

                    <button className="btn btn-info btn-block" type="submit">Save product</button>

                </form>

            </div>


            <Grid container className={classes.root}>
            {/* {manageList.map((el,ind) => (
                <Grid item key={ind} xs={12} lg={4}>
                    <Link to={`/admin/${el.url}`}>
                        <Paper className={classes.paper}>Manage {el.title}</Paper>
                    </Link>
                </Grid>
            ))} */}
            <Grid item xs={12}>
            <Paper className={classes.control}>
                <Grid container>
                <Grid item>
                    <FormLabel>spacing</FormLabel>
                    <RadioGroup
                        name="spacing"
                        aria-label="spacing"
                        value={spacing.toString()}
                        {/* onChange={handleChange} */}
                        row
                    >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                        <FormControlLabel
                            key={value}
                            value={value.toString()}
                            control={<Radio />}
                            label={value.toString()}
                        />
                    ))}
                    </RadioGroup>
                </Grid>
                </Grid>
            </Paper>
            </Grid>
    </Grid>

        </>
    )
}
