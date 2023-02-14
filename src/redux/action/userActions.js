import axios from "axios";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest());
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            dispatch(fetchUsersError());
        }
    };
};
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};
export const fetchUsersSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    };
};
export const fetchUsersError = () => {
    return {
        type: FETCH_USERS_ERROR,
    };
};

export const createUser = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, username });
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUsers());
            }
        } catch (error) {
            dispatch(createUserError());
        }
    };
};
export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    };
};
export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    };
};
export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR,
    };
};

export const deleteUser = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUserRequest());
        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`);
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsers());
            }
        } catch (error) {
            dispatch(deleteUserError());
        }
    };
};
export const deleteUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    };
};
export const deleteUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    };
};
export const deleteUserError = () => {
    return {
        type: CREATE_USER_ERROR,
    };
};