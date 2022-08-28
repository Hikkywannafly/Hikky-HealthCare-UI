import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { registerUser } from '~/redux/apiRequest';
import { useSelector, useDispatch } from "react-redux";
import AuthInput from '../input/AuthInput';
import HeaderAuth from '../chore/HeaderAuth';
import ChoreArea from '../chore/ChoreArea';
import toast, { Toaster } from 'react-hot-toast';
const initialState = {
    userName: '',
    password: '',
    phone: '',
    email: '',

}
function Register() {
    const [data, setData] = useState(initialState);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const { userName, password, phone, email } = data;
    const fakedata = {
        firstName: 'Nguyen',
        lastName: 'Tam',
        address: 'testData',
        birthDay: '06/29/2003',
        gender: '1',
        positionId: '1',
        roleId: '1',
        image: '1'
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setErrorMessage.emailExit = false;
        console.log('>>handleChange', data);
    }
    const handleClick = (e) => {
        setVisible(!visible);
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const result = await registerUser({ userName, password, phone, email, ...fakedata }, dispatch, navigate);
            if (result.susscess) {
                toast.success(result.message, {
                    style:
                        { fontSize: '14px', },
                });
                return;
            }
            setErrorMessage({
                emailExit: result?.emailExit,
                phoneExit: result?.phoneExit,
                usernameExit: result?.usernameExit,
            })

            setError(result.message);
            return toast.error(result.message, {
                style:
                    { fontSize: '14px', },
            });

        }
        catch (err) {
            console.log('>>check err', err);
        }
    }
    return (
        <>
            <HeaderAuth content='LOGIN' link="/login" />
            <div className="login-container font-fira py-2 bg-white items-center  flex flex-col min-h-screen justify-center m-auto  ">
                <main className="flex flex-col items-center justify-center  text-center align-center w-full m-auto ">
                    <div className="text-2xl font-bold flex flex-col items-center justify-center w-full text-center align-center mb-10 ">
                        <h1> Register into Hikkywannafly  </h1>
                        <Toaster />
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col items-center just-cotent w-800 h-auto lg:flex-row md:flex-row  ">
                            <div className=" basis-3/7 w-325 text-left h-auto ">
                                <div display="flex h-auto  ">
                                    <div className=" my-8">
                                        <AuthInput
                                            error={errorMessage.emailExit ? 'Email is already exits' : ''}
                                            handleChange={handleChange}
                                            name='email'
                                            content='Email Address' />
                                    </div>
                                    <div className=" my-8">
                                        <AuthInput
                                            error={errorMessage.usernameExit ? 'User is already exits' : ''}
                                            handleChange={handleChange}
                                            name='userName'
                                            content='Username' />
                                    </div>
                                    <div className=" my-8">
                                        <AuthInput
                                            error={errorMessage.phoneExit ? 'Phone is already exits' : ''}
                                            handleChange={handleChange}
                                            name="phone"
                                            content='Phone number' />
                                    </div>
                                    <div className="mb-12">
                                        <AuthInput
                                            handleClick={handleClick}
                                            handleChange={handleChange}
                                            type={visible ? "text" : "password"}
                                            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                                            name='password'
                                            content='Password' />
                                    </div>

                                    <div className=" mb-4">
                                        <button className=" rounded-lg bg-black px-12 py-2 w-full text-sm border-black outline-black border-2 text-white hover:text-black hover:shadow-[inset_25rem_0_0_0]   hover:shadow-gray-50 duration-[400ms,700ms] transition-[color,box-shadow]">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/7 h-auto ">
                                <ChoreArea />
                            </div>

                            <div className=" basis-3/7 w-325 h-auto">
                                <div className="flex flex-col items-center justify-between h-full ">

                                    <div className="text-left w-full my-3">
                                        <button type="button" className=" w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                            <span className="m-auto"> Continue with Google </span>
                                        </button>

                                    </div>
                                    <div className="text-left  w-full mb-3">
                                        <button type="button" className=" w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                            <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                            <span className="m-auto"> Continue with Apple </span>
                                        </button>

                                    </div>
                                    <div className="text-left w-full ">
                                        <button type="button" className=" w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                                            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                                            <span className="m-auto"> Continue with Facebook </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br></br>
                    <div className="">
                        <div className="flex flex-col justify-center items-center h-full text-sm  ">
                            <div className="text-center mb-5">
                                <p href="#" className="group text-black transition duration-300 cursor-pointer">
                                    CAN'T REGISTER?
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                                </p>
                            </div>
                            <div className="text-gray-400">
                                <p>Secure Login with reCAPTCHA subject to Google</p>
                                <p>Terms & Privacy</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>

    );
}
export default Register;