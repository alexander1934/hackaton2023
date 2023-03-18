import {configureStore} from "@reduxjs/toolkit";
import MainPageReducer from "./reducers/MainPageSlice";

export default configureStore({
    reducer: {
        MainPage: MainPageReducer,
    }
})