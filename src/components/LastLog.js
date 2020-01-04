import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import exerciselog from '../images/exerciselog.jpg';

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

const NotesContainer = styled.div`
  border: 1px solid;
  margin-bottom: 8%;
  padding: 8px;
  margin-left: -2%;
  margin-right: -2%;
`
const H3Styled = styled.h3`
  margin-top: 0;
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
            <div className="img-container">
              <img className="card-img" src={exerciselog} />
            </div>
            <h3 className="h3-date">Date: {exercise.date}</h3>
            <H3Styled>Exercise Type: {exercise.exerciseType}</H3Styled>
            <H3Styled>Target Muscle: {exercise.targetMuscle}</H3Styled>
            <H3Styled>Number of Sets: {exercise.sets}</H3Styled>
            <H3Styled>Number of Reps: {exercise.reps}</H3Styled>
            <H3Styled>Weight Lifted: {exercise.weightLifted}</H3Styled>
            <NotesContainer>
              <h3 className="h3-notes">Notes:</h3>
              <p className="p-notes">{exercise.notes}</p>
            </NotesContainer>
          </CardContainer>    
        )}
        <Link to="/new-log">
          <BtnStyle>Create a new log</BtnStyle>
        </Link>
      </div>
    );
  };
};