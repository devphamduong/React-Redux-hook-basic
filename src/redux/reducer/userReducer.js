import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from '../action/userActions';

const INITIAL_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false,
    isCreating: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                listUsers: action.payload,
                isLoading: false,
                isError: false
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case CREATE_USER_REQUEST:
            return {
                ...state,
                isCreating: true
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isCreating: false
            };
        case CREATE_USER_ERROR:
            return {
                ...state,
                isCreating: false
            };
        default: return state;
    }
};

export default userReducer;