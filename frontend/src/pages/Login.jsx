import React, { useState } from 'react';
import './Login.css';
import greenBg from '../assets/Green-bou.png';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleMode = (e) => {
        e.preventDefault();
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="login-page">
            <div className="login-section">
                <div className="login-box">
                    <h1>{isSignUp ? 'Create Account' : 'Get started'}</h1>
                    <p className="signup-text">
                        {isSignUp ? 'Already have an account?' : 'Create an account?'} 
                        <a href="#" onClick={toggleMode}>
                            {isSignUp ? ' Sign in' : ' Sign up'}
                        </a>
                    </p>
                    <form>
                        {isSignUp && (
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="Enter your username" />
                            </div>
                        )}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" />
                        </div>
                        {isSignUp && (
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm your password" />
                            </div>
                        )}
                        <div className="divider">or</div>
                        <button type="button" className="google-btn">
                            <img src="https://www.google.com/favicon.ico" alt="Google" />
                            {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
                        </button>
                        <button type="submit" className="signin-btn">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="image-section">
                <img src={greenBg} alt="Background" className="background-image" />
            </div>
        </div>
    );
};

export default Login; 