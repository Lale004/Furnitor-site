import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaFacebook, FaGooglePlusG } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        throw new Error('Registration error');
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="login">
        <div className="login-img">
          <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="login-text">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <input type="text" placeholder='NAME' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="email" placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)} />
            <div className="remember-me">
              <input type="checkbox" /><p>I agree  <b>Terms </b>the Privacy Policy</p>
            </div>
            <button className='loginBtn' type='submit'>REGISTER</button>
            <div className="or-sign">
              <hr />
              <span className='login-span'>or Register with</span>
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
            <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' ><Link to="/login"><b>Login</b></Link></a></p>
          </form>
        </div>
      </div>
    </section>
  )
}

function getCookie(name) {
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

export default Register
