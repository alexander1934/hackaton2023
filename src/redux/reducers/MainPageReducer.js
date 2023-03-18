let initialState = {
    currentUser: "Коваленко Александр Сергеевич",
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-USER":
            return {
                ...state,
                currentUser: action.userName,
            };
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.text,
            };
        default:
            return state;
    }
};

export default messagesReducer;
