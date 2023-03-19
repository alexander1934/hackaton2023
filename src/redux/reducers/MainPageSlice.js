import { createSlice } from "@reduxjs/toolkit";

const MainPageSlice = createSlice({
    name: "MainPage",
    initialState: {
        userName: "Коваленко Александр Сергеевич",
        inputValue: "",
        requestsData: [],
        inputParams: "",
        fiveDaysState: false,
        myRequestsState: false,
    },
    reducers: {
        searchRequests(state, action){},
        inputValueHandler(state, action){
            state.inputValue = action.payload;
        },
        setData(state, action){
            state.requestsData = action.payload;
            console.log(state.requestsData)
        },
        setFiveDaysParam(state, action){},
        setMyRequestsParam(state, action){},
        setSearchFilter(state, action){
            state.inputParams = action.payload;
            console.log(state.inputParams)
        },
    }
})

export const {searchRequests, setData, setFiveDaysParam, setMyRequestsParam, setSearchFilter, inputValueHandler} = MainPageSlice.actions;

export default MainPageSlice.reducer;