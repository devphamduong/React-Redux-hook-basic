import { INCREMENT, DECREMENT } from '../action/userActions';

const INITIAL_STATE = {
    count: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;