import axios from 'axios';
import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess } from './userSlice';

const host = 'http://localhost:9000';

export const loginUser = async (user, dispatch, navigate, handleClose) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${host}/v1/user/login`, user);
        dispatch(loginSuccess(res.data));
        navigate('/');
        handleClose();
    } catch (error) {
        dispatch(loginFail());
    }
};

export const registerUser = async (user, dispatch, navigate, handleClose) => {
    dispatch(registerStart());
    try {
        await axios.post(`${host}/v1/user/register`, user);
        dispatch(registerSuccess());
        navigate('/');
        handleClose();
    } catch (error) {
        dispatch(registerFail());
    }
};
