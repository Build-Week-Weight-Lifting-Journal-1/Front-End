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
        )}
        <Field
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          className='input'
        /><br/>
        {touched.confirmpassword && errors.confirmpassword && (
          <p className='error'>{errors.confirmpassword}</p>
        )}<br/>
        <button type='submit' className='submit'>
          Submit
        </button>
      </Form>
    </div>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ name, email, password, confirmPassword}) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      confirmPassword: confirmPassword || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup
    .string()
    .label('Password')
    .required()
    .min(4, 'Password must have more than 4 characters '),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required')
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