import React, { useState, useEffect } from "react";

import {
  Grid,
  TextField,
  FormLabel,
  FormControlLabel,
  FormControl,
  FormGroup,
  Radio,
  RadioGroup,
  Checkbox
} from "@material-ui/core";

import { Image } from "cloudinary-react";
import axios from "axios";

import useStyles from "./useStyles";

import RadioVertical from "../../../../common/inputs/RadioVertical";

//test cfg
const cfg = {
  cloud_name: "twear",
  upload_preset: "upload-uns"
};

export default props => {
  const {
    categoryName,
    topCatName,
    item,
    topCatsBase,
    gendersBase,
    displayAdditional,
    onSubmitHandler
  } = props;

  let [formData, setFormData] = useState({});
  let [imgURL, setImg] = useState("https://via.placeholder.com/150");

  // setImg = url => {
  //   imgURL = url;
  //   console.log("URL:", imgURL);
  // };

  useEffect(() => {
    if (categoryName) {
      let newInTopCat =
        categoryName && categoryName.includes("newCategory")
          ? categoryName.slice(categoryName.indexOf("-") + 1)
          : undefined;
      item
        ? setFormData({
            _id: item._id || "",
            itemNo: item.itemNo || 0,
            name: item.name || "",
            topCategory: item.topCategory,
            genders: [...item.genders],
            img: item.img || "",
            date: item.date || Date.now()
          })
        : setFormData({ topCategory: newInTopCat });
    } else if (topCatName && item) {
      setFormData({
        _id: item._id || "",
        name: item.name || "",
        img: item.img || "",
        date: item.date || Date.now()
      });
    }
  }, [categoryName, topCatName, item]);

  const onChange = event => {
    if (event.target.name === "genders") {
      event.target.checked
        ? setFormData({
            ...formData,
            genders: formData.genders
              ? [
                  ...formData.genders.filter(
                    el => el.gender !== event.target.value
                  ),
                  { gender: event.target.value }
                ]
              : [{ gender: event.target.value }]
          })
        : setFormData({
            ...formData,
            genders: [
              ...formData.genders.filter(el => el.gender !== event.target.value)
            ]
          });
    } else if (event.target.name === "img") {
      console.log("Img changed");
      console.log("File", event.target.files[0]);
      console.log(event.target);
      const imgfm = new FormData();
      imgfm.append("file", event.target.files[0]);
      imgfm.append("upload_preset", cfg.upload_preset);
      imgfm.append("tags", "unsorted");
      axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/${cfg.cloud_name}/image/upload/`,
        data: imgfm,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(r => {
          console.log("Response", r.data);
          console.log(r.data.url);
          setImg(r.data.url);
          setFormData({ img: r.data.url });
        })
        .catch(err => console.log("Error", err));
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
  };
  // // manage radio:
  // const [selectedRadio, setSelectedRadio] = useState(formData.topCategory);
  // const onChangeTopCat = event => {
  // setSelectedRadio(event.target.value);
  // };
  // const radioCondition = id => selectedRadio === id ? true : false;

  // // const radioCondition = id => formData.topCategory && formData.topCategory === id ? true : false;

  const onSubmit = event => {
    event.preventDefault();
    onSubmitHandler(formData);
  };

  const classes = useStyles();

  return (
    <>
      <h1>
        {" "}
        This is form for{" "}
        {(
          topCatName || categoryName.slice(0, categoryName.indexOf("-"))
        ).toUpperCase()}
      </h1>
      <div className={classes.wrapper}>
        <form autoComplete="off" onSubmit={onSubmit}>
          <Grid container className={classes.paper}>
            <Grid item xs={4} className={classes[displayAdditional]}>
              <TextField
                id="outlined-required"
                label="itemNo"
                name="itemNo"
                placeholder={`${Math.ceil(Math.random() * 1000)}-${Math.ceil(
                  Math.random() * 100
                )}-${Math.ceil(Math.random() * 10)}`}
                value={formData.itemNo ? formData.itemNo : ""}
                onChange={onChange}
                onFocus={onChange}
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
                name="name"
                autoFocus
                onChange={onChange}
                defaultValue={
                  topCatName === "newTopCategory" ||
                  (categoryName && categoryName.includes("newCategory"))
                    ? ""
                    : topCatName || categoryName
                }
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <div className={classes[displayAdditional]}>
            <Grid container className={classes.paper}>
              <Grid item xs={6}>
                {/* <RadioVertical
                                    legend="In Top Category:"
                                    listArray={topCatsBase}
                                    checkedCondition={radioCondition}
                                    onChange={() => {onChange(); onChangeTopCat();}}
                                /> */}
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">In Top Category:</FormLabel>
                  <RadioGroup aria-label="topCats" name="topCategory">
                    {topCatsBase.map(topCat => (
                      <FormControlLabel
                        key={topCat._id}
                        id={topCat._id}
                        value={topCat._id}
                        control={<Radio />}
                        label={topCat.name}
                        checked={
                          formData.topCategory &&
                          formData.topCategory === topCat._id
                            ? true
                            : false
                        }
                        onChange={onChange}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Select Genders</FormLabel>
                  <FormGroup>
                    {gendersBase.map(gender => (
                      <FormControlLabel
                        key={gender._id}
                        control={
                          <Checkbox
                            name="genders"
                            id={gender._id}
                            value={gender._id}
                            checked={
                              formData.genders &&
                              formData.genders.some(
                                el => el.gender === gender._id
                              )
                                ? true
                                : false
                            }
                            onChange={onChange}
                          />
                        }
                        label={gender.name}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
          </div>

          <Grid container className={classes.paper}>
            <Grid item xs={12}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload photo
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    id="inputGroupFile01"
                    name="img"
                    value=""
                    onChange={onChange}
                    className="custom-file-input"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                </div>
                <img src={imgURL} alt="Image preview" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <button className="btn btn-info btn-block" type="submit">
                Save category
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};
