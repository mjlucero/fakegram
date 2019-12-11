export const saveInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const localStorageGetItem = key => {
    return JSON.parse(localStorage.getItem(key));
};