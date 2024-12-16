import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LoginPage.module.css';
import background from '../assets/background.png';
import hidepassword from '../assets/hidepassword.png';

const LoginPage = () => {
  return (
    <div className={classes.contentLogin}>
      <div className={classes.loginSection}>

        <div className={classes.loginText}>
          <h1>LogIn</h1>
          <p>
            Do not have an account, <Link to='/signup'><span>Create a new one</span></Link>.
          </p>
        </div>

        <p>Enter Your Email</p>
        <div className={classes.inputStyle}>
          <input type="text" placeholder="example@gmail.com" />
        </div>

        <p>Enter Your Password</p>
        <div className={classes.inputStyle}>
          <input type="text" placeholder="******" />
          <img src={hidepassword} alt='hidden' />
        </div>

        <div className={classes.buttons}>
          <button>Login</button>
          <p className={classes.forgotPassword}>Forgot Your Password</p>
        </div>
      </div>
      <img src={background} alt='img-login' className={classes.backgroundImage} />
    </div>
  );
};

export default LoginPage;