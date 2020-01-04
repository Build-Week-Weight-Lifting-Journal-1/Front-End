import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  text-align: initial;
  border: 1px solid lightgray;
  border-radius: 4px; 
  padding: 0% 5% 0% 5%;
  margin: 5% 10% 5% 10%;
`

const LabelStyle = styled.label`
`

const InputStyle = styled.input`
  margin: 2% 0 0 0;
  width: 96%;
  padding: 6px 2%;
  border: 1px solid lightgray;
  border-radius: 4px;
`

const FieldContainer = styled.div`
  margin: 4% 0 2% 0;
  display: flex;
  flex-direction: column;
`

const NoteInput = styled.textarea`
  margin: 2% 0 0 0;
  width: 96%;
  padding: 6px 2%;
  border: 1px solid lightgray;
  border-radius: 4px;
  height: 55px;
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

// export default function LogForm({ addNewExercise }) {
const LogForm = ({ addNewExercise }) => {

  const [newExercise, setNewExercise] = useState({
    date: "",
    exerciseType: "",
    targetMuscle: "",
    sets: "",
    reps: "",
    weightLifted: "",
    notes: ""
  });

  const handleChanges = (event) => {
    setNewExercise({ ...newExercise, [event.target.name]: event.target.value});
  };

  useEffect(() => {
    console.log("newExercise:", newExercise)
    }, [newExercise]);

  const postData = (event) => {
    event.preventDefault();
    console.log("this is value", newExercise)
    axios
      .post("https://reqres.in/api/users", newExercise)
      .then(res => {
        console.log("this is the response: ", res)
        })
      .catch(err => console.log(err.response));
    alert("New Exercise Submitted");

    addNewExercise(newExercise);
    
    setNewExercise({
      date: "",
      exerciseType: "",
      targetMuscle: "",
      sets: "",
      reps: "",
      weightLifted: "",
      notes: ""
    });
  };

  return (
    <div>
      {/* <FormStyle onSubmit={}> */}
      <FormStyle onSubmit={postData}> {/* this is a <form> */}
        <h3>Add New Exercise</h3>
        <div className="date-container">
          <label className="date-label" htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            onChange={handleChanges}
          />
        </div>

        <FieldContainer> {/* This is a regular <div> */}
          {/* LabelStyle = <label> */}
          <LabelStyle htmlFor="exerciseType">Type of Exercise</LabelStyle>
          {/* InputStyle = <input> */}
          <InputStyle
            id="exerciseType"
            type="text"
            name="exerciseType"
            placeholder="Enter name of exercise"
            onChange={handleChanges}
            value={newExercise.exerciseType}
          />
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="targetMuscle">Target Muscle</LabelStyle>
          <InputStyle
            id="targetMuscle"
            type="text"
            name="targetMuscle"
            placeholder="Enter target muscle"
            onChange={handleChanges}
            value={newExercise.targetMuscle}
          />
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="sets">Number of Sets</LabelStyle>
          <InputStyle
            id="sets"
            type="number"
            name="sets"
            placeholder="Enter number of sets"
            onChange={handleChanges}
            value={newExercise.sets}
          />
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="reps">Number of Reps</LabelStyle>
          <InputStyle
            id="reps"
            type="number"
            name="reps"
            placeholder="Enter number of reps"
            onChange={handleChanges}
            value={newExercise.reps}
          />
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="weightLifted">Weight Lifted</LabelStyle>
          <InputStyle
            id="weightLifted"
            type="number"
            name="weightLifted"
            placeholder="How much weight did you lift?"
            onChange={handleChanges}
            value={newExercise.weightLifted}
          />
        </FieldContainer>

        <FieldContainer>
          <LabelStyle htmlFor="notes">Notes</LabelStyle>
          <NoteInput 
            id="notes"
            name="notes"
            placeholder="Add note here"
            onChange={handleChanges}
            value={newExercise.notes}
          />
        </FieldContainer>

        <ButtonContainer>
          {/* SubButton = <button> */}
          <BtnStyle type="submit">Log Exercise</BtnStyle>

          <Link exact to="/">
            <BtnStyle>Previous Log</BtnStyle>
          </Link>
        </ButtonContainer>
        
      </FormStyle>
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
    date: Yup.string().required("error"),
    exerciseType: Yup.string().required("error"),
    targetMuscle: Yup.string().required("error"),
    sets: Yup.number().positive().integer().required("error"),
    reps: Yup.number().positive().integer().required("error"),
    weightLifted: Yup.number().positive().integer().required("error"),
    notes: Yup.string().required("error")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    event.preventDefault();
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

})(Logform);

export default LogForm;