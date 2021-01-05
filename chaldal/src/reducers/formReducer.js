export const reducers = (data =[], action) => {
    switch(action.type){
        case "SEND_FORMDATA":
            return [...data, action.payload];
        default:
            return data;
    }
}