import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice"
const fetchAuthLogin = async (user) => {
    console.log('>>check fetchAuthLogin13', await axios.post("http://localhost:6088/api/auth/login", user));
    return await axios.post("http://localhost:6088/api/auth/login", user)
}
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    await fetchAuthLogin(user)
        .then(res => {
            dispatch(loginSuccess(res.data));
            navigate("/");
            return res.data;
        })
        .catch(err => {
            dispatch(loginFailed(err.response.data));
            console.log('fetchAuthLogin error', err.response.data);
            return err.response.data;
        });
}
