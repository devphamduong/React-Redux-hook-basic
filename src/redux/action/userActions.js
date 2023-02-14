import axios from "axios";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

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