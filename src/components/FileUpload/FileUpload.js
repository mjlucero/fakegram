import React, {useEffect, useState} from 'react';
import "./FileUpload.css";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import firebase from "firebase";
import LinearProgress from "@material-ui/core/LinearProgress";

const UPLOAD_PLACEHOLDER = "assets/img/upload-placeholder.png";

const FileUpload = props => {
    const {open, handleClose} = props;
    const [uploadProgress, setUploadProgress] = useState(0);
    const [tempImage, setTempImage] = useState(null);
    const [postText, setPostText] = useState("");
    const [fileToUpload, setFileToUpload] = useState(null);

    useEffect(() => {
        if (!open){
            setTempImage(null);
        }
    }, [open]);

    const handleUpload = event => {
        let file = event.target.files[0];
        setFileToUpload(file);

        if (file) {
            const reader = new FileReader();

            reader.onload = e => {
                setTempImage(e.target.result)
            };

            reader.readAsDataURL(file);
        }
    };

    const uploadPost = () => {
        const storageRef = firebase.storage().ref(`/photos/${new Date().getTime()}`);
        const task = storageRef.put(fileToUpload);

        task.on('state_changed', snap => {
            let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
            setUploadProgress(percent);
        }, err => {
            console.log("Error uploading file", err.message);
        }, () =>{
            task.snapshot.ref.getDownloadURL().then(downloadURL => {
                const post = {
                    imageUrl: downloadURL,
                    imageText: postText,
                    userId: "1234"
                };

                const dbRef = firebase.database().ref("posts");
                dbRef.push().set(post).then(() =>{
                    handleClose();
                });
            });
        });
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
                <label htmlFor="fileInput">
                    <img id="imgFileInput" src={tempImage ? tempImage : UPLOAD_PLACEHOLDER} alt="" width="100%" height="50%"/>
                </label>
                <input onChange={handleUpload} id="fileInput" type="file" accept="image/png, image/jpeg"/>
                <LinearProgress variant="determinate" value={uploadProgress} />
                <TextField
                    onChange={e => setPostText(e.target.value)}
                    margin="dense"
                    id="Description"
                    label="Write something great!"
                    type="text"
                    fullWidth
                    multiline
                    rows="3"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={uploadPost} color="primary">
                    Publish
                </Button>
            </DialogActions>
        </Dialog>
    );
};

FileUpload.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
};

export default FileUpload;