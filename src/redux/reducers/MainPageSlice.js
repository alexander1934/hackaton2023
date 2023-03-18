import { createSlice } from "@reduxjs/toolkit";

const MainPageSlice = createSlice({
    name: "MainPage",
    initialState: {
        userName: "Коваленко Александр Сергеевич",
        inputValue: "",
        requestsData: [
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
            {status: "ok", ID: 615301408074, clientName: "ЛИТВИНОВА НИНА ТИМОФЕЕВНА", INN: 615301408074, requestStatus: "Удалена (ошибка ввода)"},
        ],
        inputParams: "",
        fiveDaysState: false,
        myRequestsState: false,
    },
    reducers: {
        searchRequests(state, action){
            console.log(state.userName);
        },
        setData(state, action){},
        setFiveDaysParam(state, action){},
        setMyRequestsParam(state, action){},
    }
})

export const {searchRequests, setData, setFiveDaysParam, setMyRequestsParam} = MainPageSlice.actions;

export default MainPageSlice.reducer;