import React, { useState, useRef } from 'react';
// import React, { useState, useRef, useEffect } from 'react';

import ImagesApi from '../../../../services/Images';

import { Typography, Box } from '@material-ui/core';

import useStyles from './useStyles';

import Dropzone from './Dropzone';
import ProgressBar from './ProgressBar';
import WarningModal from '../../messages/WarningModal';
import ErrorModal from '../../messages/ErrorModal';


export default props => {

    const{emptyFields, doubles, path, addUrlsToFormData} = props;

    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [successfullUploaded, setSuccessfullUploaded] = useState(false);

    const onFilesAdded = (newFiles) => {
        setFiles([...files, ...newFiles]);
    };

    //catching error: server is not responding
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    const errorModalText = {
        title: `IMAGES NOT ADDED`,
        description: `Request to server failed`,
        button: 'OK'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

    const uploadFiles = async () => {

        if(doubles) {
            setWarningIsOpen(true);
            setWarningText({title: 'Images cannot be uploaded', description: `Check itemNo, another product with this itemNo exists in database`});

        } else if (emptyFields) {
            setWarningIsOpen(true);
            setWarningText({title: 'Images cannot be uploaded', description: `Check itemNo: it cannot be empty. Check categories: at least one category must be selected`});

        } else {
            setUploadProgress({});
            setUploading(true);
            const promises = files.map(async file => await (new ImagesApi()).uploadImage(file, path));

            try {
                addUrlsToFormData(await Promise.all(promises));
                setSuccessfullUploaded(true);
                setUploading(false);
            } catch (error) {
                setErrorIsOpen(true);
            }
        }
    };

    //All this method does for now, is creating a new Promise. Inside of that promise, we create a new XMLHttpRequest and send that to the url of our file upload server using a post request and the file to upload wrapped into a FormData object:
    // const sendRequest = file => (
    //     new Promise((resolve, reject) => {
    //         const req = new XMLHttpRequest();

            // req.upload.addEventListener("progress", event => {
            //     if (event.lengthComputable) {
            //         const copy = { ...uploadProgress };
            //         copy[file.name] = {
            //             state: "pending",
            //             percentage: (event.loaded / event.total) * 100
            //         };
            //         setUploadProgress(copy);
            //     }
            // });

            // req.upload.addEventListener("load", event => {
            //     const copy = { ...uploadProgress };
            //     copy[file.name] = { state: "done", percentage: 100 };
            //     setUploadProgress(copy);
            //     resolve(req.response);
            // });

            // req.upload.addEventListener("error", event => {
            //     const copy = { ...uploadProgress };
            //     copy[file.name] = { state: "error", percentage: 0 };
            //     setUploadProgress(copy);
            //     reject(req.response);
            // });

            // const formData = new FormData();
            // formData.append("file", file, file.name);
            // req.open("POST", "/api/images");
            // // req.open("POST", "http://localhost:5000/api/images");
            // req.send(formData);
        // })
    // );

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
                        src="/icons/check_circle_outline-24px.svg"
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
                    <span className={classes.title}>Upload Images</span>
                    <Box className={classes.content}>
                        <Dropzone
                            onFilesAdded={onFilesAdded}
                            disabled={uploading || successfullUploaded}
                        />
                        <Box className={classes.files}>
                            {files.map(el => (
                                <Box
                                    key={Math.random()}
                                    id={el.name}
                                    className={classes.row}
                                >
                                    <span className={classes.fileName}>{el.name}</span>
                                    {renderProgress(el)}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box className={classes.actions}>{renderActions()}</Box>
                </Box>
            </Box>
            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={closeErrorModal}
                closeFunction={closeErrorModal}
            />
        </Typography>
    )
};
