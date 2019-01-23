export const SELECT_USER = 'ADD_USERS';
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_COMPLETED = 'LOGIN_COMPLETED';

export const selectUser = (user) => ({
    type: SELECT_USER, payload: user
});

export const loginStarted = () => ({
    type: LOGIN_STARTED,
});

export const loginFailed = () => ({
    type: LOGIN_FAILED
});

export const loginCompleted = (username, role) => ({
    type: LOGIN_COMPLETED, payload: {username, role}
});