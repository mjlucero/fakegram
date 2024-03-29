import React, {useEffect} from 'react';

import PropTypes from "prop-types";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from "firebase";
import {localStorageGetItem, saveInLocalStorage} from "../utils";
import {withRouter} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = props => {
    const {history} = props;
    const classes = useStyles();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (!localStorageGetItem("user")) {
                const {displayName, email, photoURL, uid} = user;

                saveInLocalStorage("user", {
                    displayName,
                    email,
                    photoURL,
                    uid
                })
            }

            history.push("/");
        });
    }, []);

    const handleAuth = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const {displayName, email, photoURL, uid} = result.user;

                if (result.additionalUserInfo.isNewUser) {

                }
                saveInLocalStorage("user", {
                    displayName,
                    email,
                    photoURL,
                    uid
                });

                history.push("/");
            })
            .catch(err => console.log(err.code, err.message))
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Fakegram
                </Typography>
                <form className={classes.form} noValidate>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleAuth}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

Login.propTypes = {
    history: PropTypes.object
};

export default withRouter(Login);
