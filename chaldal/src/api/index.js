import axios from "axios";
const url = "";
export const sendData = (data) => axios.post(url, data);