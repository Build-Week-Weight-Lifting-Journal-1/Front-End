import React, { useEffect } from "react";
import styled from "styled-components";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import Header from './Header';


const LabelStyle = styled.label`
`
const FieldContainer = styled.div`
  margin: 4% 0 2% 0;
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 4% 0 4% 0;
`
const BtnStyle = styled.button`
  background-color: #18181E;
  color: white;
  font-family: 'Karma', serif;
  height: 40px;
  border-color: #18181E;
  border-radius: 5px;
  width: 90px;
`

const ParaError = styled.p`
  font-size: 13px;
  margin: 6px 0 6px 8px;
  color: red;
`

// export default function LogForm({ addNewExercise }) {
const LogForm = ({ addNewExercise, values, errors, touched, status }) => {
  console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);

  useEffect(() => {
    console.log("this is status:", status);
    status && addNewExercise(status);
    }, [status]);

  return (
    <div>
      <Header /> 
      <Form className="form-styled">
        <h3>Add New Exercise</h3>

        <div className="date-container">
          <label htmlFor="date">Date:
            <Field className="date-field"
              id="date"
              type="date"
              name="date"
            />
            {touched.date && errors.date && (
              // errors.name comes from Yup
              <ParaError>{errors.date}</ParaError>
            )}
          </label>

        </div>

        <FieldContainer> {/* This is a regular <div> */}
          {/* LabelStyle = <label> */}
          <LabelStyle htmlFor="exerciseType">Type of Exercise
          
            <Field className="input-styled"
              id="exerciseType"
              type="text"
              name="exerciseType"
              placeholder="Enter name of exercise"
            />

            {touched.exerciseType && errors.exerciseType && (
              <ParaError>{errors.exerciseType}</ParaError>
            )}

          </LabelStyle>
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="targetMuscle">Target Muscle
            <Field className="input-styled"
              id="targetMuscle"
              type="text"
              name="targetMuscle"
              placeholder="Enter target muscle"       
            />

            {touched.targetMuscle && errors.targetMuscle && (
              <ParaError>{errors.targetMuscle}</ParaError>
            )}
                  
          </LabelStyle>

        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="sets">Number of Sets
            <Field className="input-styled"
              id="sets"
              type="number"
              name="sets"
              placeholder="Enter number of sets"
            />

            {touched.sets && errors.sets && (
              <ParaError>{errors.sets}</ParaError>
            )}        
          </LabelStyle>

        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="reps">Number of Reps
            <Field className="input-styled"
              id="reps"
              type="number"
              name="reps"
              placeholder="Enter number of reps"
            />

            {touched.reps && errors.reps && (
              <ParaError>{errors.reps}</ParaError>
            )}
          
          </LabelStyle>
          
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="weightLifted">Weight Lifted
            <Field className="input-styled"
              id="weightLifted"
              type="number"
              name="weightLifted"
              placeholder="How many pounds did you lift?"
            />

            {touched.weightLifted && errors.weightLifted && (
              <ParaError>{errors.weightLifted}</ParaError>
            )}

          </LabelStyle>
          
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="notes">Notes
            <Field as="textarea" className="note-input"
              id="notes"
              name="notes"
              placeholder="Add note here"
            />
            {touched.notes && errors.notes && (
              <ParaError>{errors.notes}</ParaError>
            )}

          </LabelStyle>


        </FieldContainer>

        <ButtonContainer>
          {/* SubButton = <button> */}
          <BtnStyle type="submit">Log Exercise</BtnStyle>

          <Link exact to="/lastlog">
            <BtnStyle>Return</BtnStyle>
          </Link>
        </ButtonContainer>

      </Form>
    </div>
  )
};

const FormikLogForm = withFormik({
  mapPropsToValues(props) {
    return {
      date: props.date || "",
      exerciseType: props.exerciseType || "",
      targetMuscle: props.targetMuscle || "",
      sets: props.sets || "",
      reps: props.reps || "",
      weightLifted: props.weightLifted || "",
      notes: props.notes || ""
    };
  },

  validationSchema: Yup.object().shape({
    date: Yup.string().required("Select a date"),
    exerciseType: Yup.string().required("Enter exercise name"),
    // targetMuscle: Yup.string().required("error"),
    sets: Yup.number().positive().integer().required("Enter number of sets"),
    reps: Yup.number().positive().integer().required("Enter number of reps")
    // weightLifted: Yup.number().positive().integer().required("Enter lbs lifted"),
    // notes: Yup.string().required("error")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    // event.preventDefault();
    console.log("this is value", values)
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("this is the response: ", res)
        // sends a status update through props in UserForm with value as response.data content
        // this comes from the formikBag
        setStatus(res.data);

        //clears form inputs, from FormikBag
        resetForm();
      })
      .catch(err => console.log(err.response));
    alert("New Exercise Submitted");
  }

})(LogForm);

// export default LogForm;
export default FormikLogForm;