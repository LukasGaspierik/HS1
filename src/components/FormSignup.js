import React from 'react';
import validate from '../data/validateInfo';
import useForm from './useForm';
import '../App.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          LOGIN
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already don´t have an account? Register <a href='/Register'>here.</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;