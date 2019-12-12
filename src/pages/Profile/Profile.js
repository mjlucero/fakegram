import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {localStorageGetItem} from "../../utils";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import firebase from "firebase";

const useStyles = makeStyles(theme => ({
    avatarLarge: {
        width: 50,
        height: 50,
    },
    root: {
        padding: "25px 0",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%"
    }
}));

const Profile = () => {
    const classes = useStyles();

    const [user, setUser] = useState({
        displayName: "",
        email: "",
        photoURL: "",
        uid: ""
    });

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        setUser(localStorageGetItem("user"));

        /*firebase.database().ref("posts").on("value", snap => {
            let objDB = snap.val();

            setUserPosts(Object.keys(objDB).map(key => {
                return objDB[key];
            }));
        });*/

        const dbRef = firebase.database().ref("posts");

        dbRef.orderByChild("userId").equalTo("BWRhvPdUs4cwl4GbggDOj0sm9Ws2").on("child_added", (snap) => {
            console.log(snap.val());
        });
    }, []);

    return (
        <Grid container>
            <Grid container item xs={12} style={{height: "15%"}}>
                <Grid item xs={4}>
                    <Grid container item xs={12} justify="center">
                        <Avatar alt="Remy Sharp" src={user.photoURL} className={classes.avatarLarge}/>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Typography variant="subtitle1" gutterBottom>
                            {user.displayName}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={8}>
                    <Grid item xs={4}>
                        <Grid container item xs={12} justify="center">
                            <Typography variant="h6" gutterBottom>
                                {userPosts.length}
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Typography variant="subtitle1" gutterBottom>
                                Posts
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container item xs={12} justify="center">
                            <Typography variant="h6" gutterBottom>
                                150
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Typography variant="subtitle1" gutterBottom>
                                Followers
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container item xs={12} justify="center">
                            <Typography variant="h6" gutterBottom>
                                5
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Typography variant="subtitle1" gutterBottom>
                                Follow
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{height: "85%"}}>
                <div className={classes.root}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {userPosts.map((post, index) => (
                            <GridListTile key={index} cols={1}>
                                <img src={post.imageUrl} alt=""/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Grid>
        </Grid>
    );
};

export default Profile;