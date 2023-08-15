import React, { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaFacebook, FaGooglePlusG } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"


function Sign() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [addclass, setAddClass] = useState("")
    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<AiOutlineEyeInvisible />)
    const handelToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(<AiOutlineEye />)
        } else {
            setPasswordType('password');
            setPasswordIcon(<AiOutlineEyeInvisible />)
        }
    }
    const [errorMsg, setErrorMsg]= useState('')
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const csrftoken = getCookie('csrftoken');

            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.token);
                navigate('/');
            } else {
                const errorData = await response.json();
                setErrorMsg('sehv userdi ya da kod sehvdi!')
            }
        } catch (error) {
            console.error('Unknown error occurred.', error);
        }
    };

    return (
        <section>
            <div className="login">
                <div className="login-text">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <input type="text" placeholder='USERNAME' value={username} onChange={e => setUsername(e.target.value)} />
                        <div className="pasword-icon">
                            <input type={passwordType} placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)} />
                            <div className='pas-icons' onClick={handelToggle}>
                                {passwordIcon}
                            </div>
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" /><p>Remember me</p>
                        </div>
                        <button className='loginBtn' type='submit'>LOGIN</button>
                        {errorMsg && <p>{errorMsg}</p>}
                        <div className="or-sign">
                            <hr />

                            <span className='login-span'>or Login Up with</span>
                        </div>
                        <div className="forum-img">
                            <div className="login-f">
                                <div className="login-watch-icon">
                                    <FaFacebook />
                                </div>
                                <p>Facebook</p>

                            </div>
                            <div className="login_g">
                                <div className="login-watch-icon_g">
                                    <FaGooglePlusG />
                                </div>
                                <p>Google</p>
                            </div>


                        </div>

                        <p className='account-text'>Don't have an account? <span className='sign-up-btn2'><Link to="/register"><b>Register</b></Link></span></p>

                    </form>

                </div>

                <div className="login-img">
                    <img src="https://i.pinimg.com/564x/7d/9d/bf/7d9dbff60d2c4e3e6bf3dfa9af387eca.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Sign
