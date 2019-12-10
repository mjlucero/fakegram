import {API_URL} from "../config";

export const createPost = (userId, photoUrl, text) => {
    fetch(`${API_URL}/posts.json`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({userId, photoUrl, text})
    }).then(res => console.log(res)).catch(err => console.log(err))
};