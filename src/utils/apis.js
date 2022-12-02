import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getBooks = async (limit = 10) => {
    let res;
    try {
        res = await axios.get(`${BASE_URL}?_limit=${limit}`);
    } catch (err) {
        console.log(err);
    }
    return res
};