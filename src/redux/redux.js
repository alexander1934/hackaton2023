import {combineReducers, legacy_createStore} from "redux";
import MainPageReducer from "./reducers/MainPageReducer";

let redusers = combineReducers({
    MainPage: MainPageReducer,
})

let store = legacy_createStore(redusers);

export default store;