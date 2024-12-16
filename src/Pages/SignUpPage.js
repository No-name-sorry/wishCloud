import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SignUpPage.module.css';
import background from '../assets/background.png';
import hidepassword from '../assets/hidepassword.png';

const SignUpPage = () => {
  return (
    <div className={classes.contentSignup}>
      <img src={background} alt='Signup background' className={classes.signupImage} />
      <div className={classes.signupSection}>
        <div className={classes.signupText}>
          <h1>SignUp</h1>
          <p>
            Already have an account,{' '}
            <Link to='/login'>
              <span>Login</span>
            </Link>.
          </p>
        </div>
        <div className={classes.inputGrid}>
          <div className={classes.inputStyleSignup}>
            <p>NickName</p>
            <div className={classes.dataInput}>
              <input type='text' placeholder='michael joe' />
            </div>
          </div>

          <div className={classes.inputStyleSignup}>
            <p>Email</p>
            <div className={classes.dataInput}>
              <input type='text' placeholder='example@gmail.com' />
            </div>
          </div>

          <div className={classes.inputStyleSignup}>
            <p>Password</p>
            <div className={classes.dataInput}>
              <input type='text' placeholder='******' />
              <img src={hidepassword} alt='Hide password' />
            </div>
          </div>

          <div className={classes.inputStyleSignup}>
            <p>Confirm Password</p>
            <div className={classes.dataInput}>
              <input type='text' placeholder='******' />
              <img src={hidepassword} alt='Hide password' />
            </div>
          </div>
        </div>
        <div className={classes.terms}>
          <input type='checkbox' id='terms' name='Terms' value='Terms' />
          <label htmlFor='terms'>
            I have read and agreed to the Terms of Service and Privacy Policy
          </label>
        </div>
        <button>Create account</button>
      </div>
    </div>
  );
};

export default SignUpPage;
