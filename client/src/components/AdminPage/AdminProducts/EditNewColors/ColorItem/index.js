import React, {useState, useEffect} from 'react';

import { Box, Grid} from '@material-ui/core';

import useStyles from './useStyles';

import ImgItem from './ImgItem';
import UploadFile from '../../../../common/inputs/UploadFile';


export default props => {

    const { productCloudinaryPath, item, onUploadImgs, onDeleteImg} = props;
    // const { productCloudinaryPath, item, onChangeLink, onUploadImgs, onDeleteImg} = props;

    const [css, setCss] = useState({color: 'transparent'});
    const [cloudinaryPath, setCloudinaryPath] = useState('');

    useEffect(() => {
        if (item && item.color) {
            setCss({color: item.color.cssValue});
            if(productCloudinaryPath && productCloudinaryPath !== '') {
                setCloudinaryPath(productCloudinaryPath + item.color.name.toLowerCase() + '/');
            }
        }
        return () => {
            setCss({});
            setCloudinaryPath('');
        }
    }, [item, productCloudinaryPath]);

    const handleOnDelete = imgLink => {
        onDeleteImg(imgLink);
    };

    const classes = useStyles(css);

    return (
        <>
            <Box fontSize="body1.fontSize" pb={2} textAlign='center' className={classes.colored} >  {item.color ? item.color.name.toUpperCase() : ''}</Box>
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={12} sm={6} lg={8} container spacing={4}>
                    {item.color && item.imgsColor.map(url =>
                        <Grid item xs={4} lg={3} className={classes.paper} key={Math.random()}>
                            <ImgItem item={item} url={url} handleOnDelete={handleOnDelete}/>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} lg={4} container className={classes.paper}>
                    {/* <Grid item xs={12}>Редактирование УРЛОВ</Grid> */}
                    <Grid item xs={12}>
                        <UploadFile
                            emptyFields={false}
                            doubles={false}
                            path={cloudinaryPath}
                            addUrlsToFormData={onUploadImgs}
                        />
                    </Grid>
                    {/* { [0,1,2].map((el, ind) =>
                        <Grid item xs={4} key={el}>
                            <TextField
                                id={'imgs-'+ind}
                                label={'imgs-'+(ind+1)}
                                name={ind+'-imgs'}
                                onChange={onChangeLink}
                                value={item && item.imgsColor ? item.imgsColor[ind] : ''}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    )} */}
                </Grid>
            </Grid>
        </>
    )
};
