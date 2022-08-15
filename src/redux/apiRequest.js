import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice"
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:6088/api/auth/login", user);
        console.log(user)
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (error) {
        dispatch(loginFailed());
    }
}