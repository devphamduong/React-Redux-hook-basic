import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../action/userActions';

const INITIAL_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false
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
        default: return state;
    }
};

export default userReducer;