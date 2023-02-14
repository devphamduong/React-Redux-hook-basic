import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../action/userActions';

const INITIAL_STATE = {
    listUsers: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                listUsers: action.payload
            };
        case FETCH_USERS_ERROR:
            return {
                ...state
            };
        default: return state;
    }
};

export default userReducer;