import * as api from "../api";

export const sendPost = data => async dispatch => {
    try {
        const {data} = await api.sendData();
        dispatch({type: "SEND_FORMDATA", payload: data})
    } catch (error) {
        console.log(error.message);
    }
}