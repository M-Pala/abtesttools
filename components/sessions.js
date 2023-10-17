export const setSession = (key, value) => {
    if (process.browser) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
};
    
export const getSession = (key) => {
    if (process.browser) {
        const session = window.localStorage.getItem(key);
        return session ? JSON.parse(session) : null;
    }
};

export const removeSession = (key) => {
    if (process.browser) {
        window.localStorage.removeItem(key);
        window.localStorage.removeItem(key);
    }
};