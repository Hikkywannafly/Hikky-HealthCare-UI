import './Login.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '~/redux/apiRequest';
import { useDispatch } from "react-redux";
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState({ value: '', showPassword: false, });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUserName(username);
        console.log(username);
    }
    const onChangePassword = (e) => {
        const password = e.target.value;
        // let element = document.querySelector('.control-password');
        // if (password === '') element.style.display = 'none';
        console.log(password);
        setPassword({ value: password });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            userName: userName,
            password: password.value,
        }
        loginUser(newUser, dispatch, navigate);
    }
    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    }

    return (
        <div className="login-background">
            <div className="login-container container">
                <div className="login-frame row">

                    <div className="login-content col">
                        <section className="section-login">
                            <div className="login-title">
                                <div className="login-h">
                                    <h1>LOGIN</h1>
                                </div>
                                <div className="login-h small-logan">
                                    <h5>Welcome to the hikkywannafly heath care</h5>
                                </div>

                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="login-area">
                                    <div className="login-form">
                                        <input type="text" className="input-style" placeholder="Enter your user name or email"
                                            // value={this.state.userName}
                                            // onChange={(event) => this.handleOnChangeInput(event, 'userName')}
                                            onChange={onChangeUsername}
                                            value={userName}
                                        ></input>
                                        <span className="span-style"></span>
                                        <label className="label-style">Username</label>
                                    </div>
                                    <br></br>
                                    <div className="login-form">
                                        <input
                                            // type={!this.state.isShowingPaswword ? 'password' : 'text'} 
                                            type={password.showPassword ? "text" : "password"}
                                            className="input-style"
                                            placeholder="Enter your password"
                                            // value={this.state.password}
                                            // onChange={(event) => { this.handleOnChangeInput(event, 'password') }}
                                            onChange={onChangePassword}
                                            value={password.password}
                                        >
                                        </input>
                                        <span className="span-style"></span>
                                        <label className="label-style" >Password</label>
                                        {password.value !== '' && (<div
                                            style={{ display: 'block' }}
                                            // ref={(node) => { mynode = node }}
                                            className='control-password'
                                            onClick={handleClickShowPassword}
                                        >
                                            {/* <i class={password.showPassword ? 'fa-solid fa-eye-slash' : '<fa-solid fa-eye'}> </i> */}
                                            <span className="show-hide">
                                                {password.showPassword ? 'Hide' : 'Show'}
                                            </span>
                                        </div>
                                        )}

                                    </div>
                                </div>



                                <div className="input-control row">
                                    <div className="col forgot">
                                        <span className="d"> Forgot Password?</span>
                                    </div>
                                    <div className="col">
                                        <div className="wrapper">
                                            <button
                                            // onClick={(event) => this.handleLogin(event)}
                                            >
                                                <span >Login</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="striped">
                                    <span className="striped-line"></span>
                                    <span className="striped-text">Or</span>
                                    <span className="striped-line"></span>
                                </div>
                                <div className="wrapper">
                                    <button> <span>Register</span></button>
                                </div>
                                <div className="striped">
                                    <span className="striped-line"></span>
                                    <span className="striped-text">Login with social</span>
                                    <span className="striped-line"></span>
                                </div>
                                <div className="login-social">
                                    <div className="wrapper google">
                                        <button className="className"> <span><img src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"></img> Continue with Google</span></button>

                                    </div>
                                    <div className="wrapper fb">
                                        <button className=" button-google"> <span><i className="fab fa-facebook-f"></i> Continue with Facebook</span></button>
                                    </div>
                                </div>

                            </form>
                        </section>
                    </div>

                    {/* <div className="login-image col">
                            <img src="https://static.vecteezy.com/system/resources/previews/002/003/810/non_2x/doctor-character-vector.jpg"></img>
                        </div> */}

                </div>
            </div >
        </div >

    );
}
export default Login;