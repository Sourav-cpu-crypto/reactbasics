import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers/IndexReducers';
const store =createStore(rootReducer,applyMiddleware(thunk));
export default store;