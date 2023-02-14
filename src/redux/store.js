import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/reducer/rootReducer';
import { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

export default store;