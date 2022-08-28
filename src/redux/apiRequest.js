import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice"
import { registerFailed, registerStart, registerSuccess } from "./userSlice";
const fetchAuthLogin = async (user) => {
    return await axios.post("http://localhost:6088/api/auth/login", user)
}
const fetchAuthRegister = async (user) => {
    return await axios.post("http://localhost:6088/api/auth/register", user)
}
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    return await fetchAuthLogin(user)
        .then(res => {
            dispatch(loginSuccess(res.data));
            navigate("/");
            return res.data;
        })
        .catch(err => {
            dispatch(loginFailed(err.response.data));
            // console.log('fetchAuthLogin error', err.response.data);
            return err.response.data;
        });
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    return await fetchAuthRegister(user)
        .then(res => {
            dispatch(registerSuccess(res.data));
            navigate("/login");
            return res.data;
        })
        .catch(err => {
            dispatch(registerFailed(err.response.data));
            console.log('fetchAuthRegister error', err.response.data);
            return err.response.data;
        })

}