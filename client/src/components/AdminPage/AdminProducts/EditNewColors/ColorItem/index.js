import React, {useState, useEffect} from 'react';

import { Box, Grid, TextField } from '@material-ui/core';

import useStyles from './useStyles';

// import UploadFile from '../../../../common/inputs/UploadFile';


export default props => {

    const { item, colorsBase, onChangeColor} = props;

    // const [formData, setFormData] = useState({});


    const [css, setCss] = useState({color: 'transparent'});

    useEffect(() => {
        if (item && item.color) {
            setCss({color: item.color.cssValue});
        }
    }, [item])

    const classes = useStyles(css);

    return (
        <>
            <Box fontSize="body1.fontSize" pb={2} textAlign='center' className={classes.colored} >  {item.color ? item.color.name.toUpperCase() : ''}</Box>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={6} lg={4} container>
                    {item.color && item.imgsColor[0] ? item.imgsColor.map(url =>
                        <Grid item xs={4}
                            className={classes.paper}
                            key={Math.random()}
                        >
                            <Box className={classes.imgContainer}>
                                <img
                                    className={classes.img}
                                    src={url}
                                    alt="NOT FOUND"/>

                            </Box>
                        </Grid>

                    ) : <></>
                    }
                </Grid>
                <Grid item xs={12} sm={6} lg={8} container className={classes.paper}>
                    <Grid item xs={12}>ДОБАВЛЕНИЕ УРЛОВ</Grid>
                    {/* <Grid item xs={12}>
                        <UploadFile/>
                    </Grid> */}
                    { [0,1,2].map((el, ind) =>
                        <Grid item xs={4} key={el}>
                            <TextField
                                id={'imgs-'+ind}
                                label={'imgs-'+(ind+1)}
                                name={ind+'-imgs'}
                                //onChange={onChange}
                                //value={formData.imgs ? formData.imgs[ind] : ''}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    )
};
