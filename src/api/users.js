import {API_URL} from "../config";

export const createUser = (username, photoUrl) => {
    return fetch(`${API_URL}/users.json`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username, photoUrl})
    }).then(res => res.json());
};