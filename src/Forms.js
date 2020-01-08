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
          type='name'
          name='name'
          placeholder='First Name'
          className='input'
        /><br/>
        {touched.name && errors.name && <p className='error'>{errors.name}</p>}
        <Field
          type='email'
          name='email'
          placeholder='Email'
          className='input'
        /><br/>
        {touched.email && errors.email && (
          <p className='error'>{errors.email}</p>
        )}
        <Field
          type='password'
          name='password'
          placeholder='Password'
          className='input'
        /><br/>
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}<br/>
        {/* This here is an optinal thing and I'm unsure if I want to use it. */}
        {/* <label className='terms'>
          <Field type='checkbox' name='term' checked={values.term} /> I agree to
          the <a href='https://github.com/emster7013'>Terms and Conditions</a>
        </label> */}
        <button type='submit' className='submit'>
          Submit
        </button>
      </Form>
    </div>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ name, email, password, term }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      term: term || false
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(0)
      .required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);
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