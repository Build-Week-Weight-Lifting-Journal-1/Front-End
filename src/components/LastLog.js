import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: initial;
  border: 1px solid lightgray;
  border-radius: 4px; 
  padding: 0% 5% 0% 5%;
  margin: 5% 10% 5% 10%;
  box-shadow: 6px 7px 5px #18181E;
`

const BtnStyle = styled.button`
  background-color: #18181E;
  color: white;
  font-family: 'Karma', serif;
  height: 40px;
  border-color: #18181E;
  border-radius: 5px;
  margin-bottom: 5%;
  box-shadow: 4px 5px 5px #18181E;
`




export default function LastLog({ exerciseList }) {

  console.log("this is exerciseList in LastLog", exerciseList);

  if (exerciseList.length === 0) {
    return (
      <div>
        <h3>You have no previous logs</h3>
        <Link to="/new-log">
          <BtnStyle>Create a new log</BtnStyle>
        </Link>
      </div>
    );
  }
  else {
    return (
      <div>
        {exerciseList.map((exercise) =>
          <CardContainer>
            <h3>Date: {exercise.date}</h3>
            <h3>Exercise Type: {exercise.exerciseType}</h3>
            <h3>Target Muscle: {exercise.targetMuscle}</h3>
            <h3>Number of Sets: {exercise.sets}</h3>
            <h3>Number of Reps: {exercise.reps}</h3>
            <h3>Weight Lifted: {exercise.weightLifted}</h3>
            <div>
              <h3 className="notes-card">Notes:</h3>
              <p>{exercise.notes}</p>
            </div>
          </CardContainer>    
        )}
        <Link to="/new-log">
          <BtnStyle>Create a new log</BtnStyle>
        </Link>
      </div>
    );
  };
};