import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const SignUp = ({ errors, touched, values }) => {
  return (
    <div className='form'>
      <h4>Sign Up</h4>

      <Form>
        <Field
          type='username'
          name='name'
          placeholder='Enter Username'
          className='input'
        /><br/>
        {touched.username && errors.username && <p className='error'>{errors.username}</p>}
        {/* <Field
          type='email'
          name='email'
          placeholder='Email'
          className='input'
        /><br/>
        {touched.email && errors.email && (
          <p className='error'>{errors.email}</p>
        )} */}
        <Field
          type='password'
          name='password'
          placeholder='Password'
          className='input'
        /><br/>
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        {/* <Field
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          className='input'
        /><br/>
        {touched.confirmpassword && errors.confirmpassword && (
          <p className='error'>{errors.confirmpassword}</p>
        )}<br/> */}
        <button type='submit' className='submit'>
          Submit
        </button>
      </Form>
    </div>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ username,password}) {
    return {
      username: username || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    
    password: Yup.string()
      .min(4, 'make a strong password')
      .required(),

  }),
  handleSubmit(values, { setStatus, resetForm }) {
      console.log(values);
      axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
         console.log('success', res);
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})
const FormSignUp = FormikApp(SignUp)

export default FormSignUp;