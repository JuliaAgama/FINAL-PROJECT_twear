import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';

import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

import FormHelperText from '@material-ui/core/FormHelperText';


export default props => {
    const classes = useStyles();


    const{categoryName, topCatName, topCatsBase, catsBase, gendersBase, exists, displayAdditional} = props;
    const specialCategory = 'looks';
    console.log(props);

    let [item, setItem] = useState(null);

        useEffect(()=> {
            if(categoryName) {
                setItem(catsBase.filter(el => el.name === categoryName)[0]);
            } else if(topCatName) {
                setItem(topCatsBase.filter(el => el.name === topCatName)[0]);
            }
        },[props])


        // logics to select topCat for category form:
        let [selectedTop, setSelectedTop] = useState('');
        // logics to select Gender for category form:
        let [selectedGenders, setSelectedGenders] = useState([]);

        useEffect(()=> {
            if(item && categoryName) {
                setSelectedTop(item.topCategory);
                setSelectedGenders(item.genders);
            }
        },[item])

        const onChangeTopCat = event => {
            setSelectedTop(event.target.value);
        };

        const onSelectGender = event => {
            let id = event.target.id;
            setSelectedGenders(selectedGenders.includes(id) ? selectedGenders.filter(el => el !== id) : [...selectedGenders, id])
        };
            // console.log('HELLLLOOOOO', item);
            // console.log('yyyyyyyaaaaaaa', selectedTop);

            // state = {
            //     title : '',
            //     description : '',
            // };
        
            // onSubmit = (e) => {
            //     e.preventDefault();
            //     this.props.onSubmit(this.state);
            // };
        
        const onSubmit = event => {
            event.preventDefault();
            console.log(selectedGenders);
            console.log(selectedTop);
            console.log(event.target.value);

            if(categoryName) {
                setItem({
                    itemNo: '',
                    name: '',
                    topCategory: '', //_id
                    genders: [], //_id
                    img: ''
                })

            } else if(topCatName) {
                setItem({
                    name: '',
                    img: ''
                })
            }
        }

    return (
        <>
            <h1> This is form for {(topCatName || categoryName).toUpperCase()}</h1>
            <div className={classes.wrapper}>

                {/* <form className="text-center border border-light p-5"> */}
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={onSubmit}
                >

                    <Grid container className={classes.paper}>
                        <Grid item xs={4} className={classes[displayAdditional]}>
                            <TextField
                                required
                                id="outlined-required"
                                label="itemNo"
                                defaultValue={item ? item : ''}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item className={classes.justify}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Category"
                                defaultValue={topCatName !== 'newTopCategory'&& categoryName !== 'newCategory' ? topCatName || categoryName : ''}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <div className={classes[displayAdditional]}>
                        <Grid container className={classes.paper}>
                            <Grid item xs={6}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">In Top Category:</FormLabel>
                                    <RadioGroup
                                        aria-label="topCats"
                                        name="topCats"
                                        value={selectedTop}
                                        onChange={onChangeTopCat}
                                        >
                                    {topCatsBase
                                        .filter(el => el.name !== specialCategory)
                                        .map(topCat =>
                                            <FormControlLabel
                                                key={topCat._id}
                                                name={topCat.name}
                                                id={topCat._id}
                                                value={topCat._id}
                                                control={<Radio />}
                                                label={topCat.name}
                                            />
                                        )}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Select Genders</FormLabel>
                                    <FormGroup>
                                        {gendersBase
                                        .map(gender =>
                                            <FormControlLabel
                                                key={gender._id}
                                                control={
                                                    <Checkbox
                                                        name={gender.name}
                                                        id={gender._id}
                                                        value={gender._id}
                                                        checked={selectedGenders.includes(gender._id) ? true : false}
                                                        onChange={onSelectGender}
                                                    />}
                                                label={gender.name}
                                            />
                                        )}
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>

                                    {/* {topCatsBase
                                    .filter(el => el.name === specialCategory)
                                    .map(topCat =>
                                        <div className="form-check"
                                            key={topCat._id}
                                        >
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name={topCat.name}
                                                id={topCat._id}
                                                value={topCat.name}
                                                checked={topCat.name === checkedTop ? true : false}
                                                onChange={onChange}
                                            />
                                            <label className="form-check-label" htmlFor={topCat.name}>
                                            {'include to ' + topCat.name.toUpperCase() + ' collections?'}
                                            </label>
                                        </div>
                                    )} */}

                    <Grid container className={classes.paper}>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                            <button className="btn btn-info btn-block" type="submit">Save category
                            </button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )
}
