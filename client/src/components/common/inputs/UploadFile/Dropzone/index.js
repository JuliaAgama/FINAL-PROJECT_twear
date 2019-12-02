import React, { useState, createRef } from 'react';
import clsx from 'clsx';

import { Typography, Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    const {disabled, onFilesAdded} = props;

    const fileInputRef = createRef();

    const [highlight, setHighlight] = useState(false);

    const openFileDialog = () => {
        if (disabled) return;
        fileInputRef.current.click();
    };

    const fileListToArray = list => {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    };

    const onFilesAddedHandler = event => {
        if (disabled) return;
        const files = event.target.files;
        if (onFilesAdded) {
            const array = fileListToArray(files);
            onFilesAdded(array);
        }
    };

    const onDragOver = event => {
        event.preventDefault();
        if (disabled) return;
        setHighlight(true);
    };

    const onDragLeave = event => {
        setHighlight(false);
    };

    const onDrop = event => {
        event.preventDefault();
        if (disabled) return;
        const files = event.dataTransfer.files;
        if (onFilesAdded) {
            const array = fileListToArray(files);
            onFilesAdded(array);
        }
        setHighlight(false);
    };


    const classes = useStyles();

    return (
        <Typography component="div" className={classes.root}>
            <Box className={classes.card}>
                <Box
                    className={clsx(classes.dropzone, {[classes.highlight]: highlight})}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={openFileDialog}
                    style={{ cursor: disabled ? "default" : "pointer" }}
                >
                    <input
                        ref={fileInputRef}
                        className={classes.fileInput}
                        type="file"
                        multiple
                        onChange={onFilesAddedHandler}
                    />
                    <img
                        alt="upload"
                        className={classes.icon}
                        src="/icons/cloud_upload-24px.svg"
                    />
                    <span>Upload Images</span>
                </Box>
            </Box>
        </Typography>
    )
};
