import React, {useState} from 'react';
import {createUser} from "../api/users";
import {createPost} from "../api/posts";

const Feed = () => {
    const [userId, setUserId] = useState("");

    const handleCreateUser = () => {
        createUser("mlucero", "prueba").then(newUser => {
            setUserId(newUser.name);
        });
    };

    const handleCreatePost = () => {
        console.log("userId", userId);
        createPost(userId, "prueba", "Lorem impsum")
    };

    return (
        <div>
            <button onClick={handleCreateUser}>Create user</button>
            <button onClick={handleCreatePost}>Create post</button>
        </div>
    );
};

export default Feed;