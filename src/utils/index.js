export const saveInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const localStorageItemIsNotNull = key => {
    return localStorage.getItem(key);
};