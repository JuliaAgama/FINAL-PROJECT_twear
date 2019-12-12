import React, { useState, useEffect } from 'react';

import { Typography, Box } from '@material-ui/core';

import useStyles from './useStyles';

import Dropzone from './Dropzone';
import ProgressBar from './ProgressBar';


export default () => {

    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [successfullUploaded, setSuccessfullUploaded] = useState(false);

    // useEffect(() => {
    //     setFiles([]);
    //     setUploading(false);
    //     setUploadProgress({});
    //     setSuccessfullUploaded(false);
    // },[]);

    const onFilesAdded = (newFiles) => {
        setFiles([...files, newFiles]);
        console.log('files can be added');
    };

    const uploadFiles = async () => {
        setUploadProgress({});
        setUploading(true);
        const promises =[];
        files.forEach(file => {
            promises.push(sendRequest(file))
        });
        try {
            await Promise.all(promises);
            setSuccessfullUploaded(true);
            setUploading(false);
        } catch (error) {
            console.log(error);
            // Not Production ready! Do some error handling here instead...
            // setSuccessfullUploaded(true);
            // setUploading(false);
        }
    };

    //All this method does for now, is creating a new Promise. Inside of that promise, we create a new XMLHttpRequest and send that to the url of our file upload server using a post request and the file to upload wrapped into a FromData object:
    const sendRequest = file => (
        new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();

            req.upload.addEventListener("progress", event => {
                if (event.lengthComputable) {
                    const copy = { ...uploadProgress };
                    copy[file.name] = {
                        state: "pending",
                        percentage: (event.loaded / event.total) * 100
                    };
                    setUploadProgress(copy);
                }
            });

            req.upload.addEventListener("load", event => {
                const copy = { ...uploadProgress };
                copy[file.name] = { state: "done", percentage: 100 };
                setUploadProgress(copy);
                resolve(req.response);
            });

            req.upload.addEventListener("error", event => {
                const copy = { ...uploadProgress };
                copy[file.name] = { state: "error", percentage: 0 };
                setUploadProgress(copy);
                reject(req.response);
            });

            const formData = new FormData();
            formData.append("file", file, file.name);
            req.open("POST", "http://localhost:5000/images");
            req.send(formData);
        })
    );

    const renderProgress = file => {
        const uploadProgressFile = uploadProgress[file.name];
        if (uploading || successfullUploaded) {
            return (
                <div className={classes.progressWrapper}>
                    <ProgressBar
                        progress={uploadProgressFile ? uploadProgressFile.percentage : 0}
                    />
                    <img
                        className={classes.checkIcon}
                        alt="done"
                        src="icons/check_circle_outline-24px.svg"
                        style={{opacity: uploadProgressFile && uploadProgressFile.state === "done" ? 0.5 : 0}}
                    />
                </div>
                );
        }
    };

    const renderActions = () => (
        successfullUploaded ?
        <button
            className={classes.button}
            onClick={() => {setFiles([]); setSuccessfullUploaded(false)}}
        > Clear </button> :
        <button
            className={classes.button}
            disabled={files.length < 0 || uploading}
            onClick={uploadFiles}
        > Upload </button>
    );

    const classes = useStyles();

    return (
        <Typography component="div" className={classes.root} key={Math.random()}>
            <Box className={classes.card}>
                <Box className={classes.upload}>
                    <span className={classes.title}>Upload Photos</span>
                    <Box className={classes.content}>
                        <Dropzone
                            onFilesAdded={onFilesAdded}
                            disabled={uploading || successfullUploaded}
                        />
                        <Box className={classes.files}>
                            {files.map(file => (
                                <Box
                                    key={Math.random()}
                                    id={file.name}
                                    className={classes.row}
                                >
                                    <span className={classes.filename}>{file.name}</span>
                                    {renderProgress(file)}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box className={classes.actions}>{renderActions()}</Box>
                </Box>
            </Box>
        </Typography>
    )
};
