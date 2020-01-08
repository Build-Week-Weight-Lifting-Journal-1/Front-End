import React, { useState } from 'react';
import './App.css';
import LogForm from "./components/LogForm";
import { Route } from "react-router-dom";
import LastLog from "./components/LastLog";
import Forms from "./components/Forms";
// import styled from 'styled-components';
// const Style = styled.div`
//   display: flex;
//   margin: 0 auto;
//   justify-content: center;
//   height: 100vh;
//   font-size: 1.5rem;
//   background #18181E ;
//   color: #DEC79B;
// `
function App() {
  const [members, setMembers] = useState([{
    name: '',
    email:'',
    password: ''
  }]);
  const addNewMember = teamMember =>{
    setMembers([...members, teamMember]);
  };
  const [exerciseList, setExerciseList] = useState([]);
  const addNewExercise = (exercise) => {
    const newExercise = {
      date: exercise.date,
      exerciseType: exercise.exerciseType,
      targetMuscle: exercise.targetMuscle,
      sets: exercise.sets,
      reps: exercise.reps,
      weightLifted: exercise.weightLifted,
      notes: exercise.notes
    }
    const newExerciseList = [...exerciseList, newExercise];
    setExerciseList(newExerciseList);
  };
  console.log("this is exerciseList", exerciseList);
  return (
    <div className="App">
      {/* <Style>
        <div className="App">
          <img src={logo} alt="Logo"/>
          <Forms addNewMember={addNewMember}/>
        </div>
      </Style> */}
      <Route
        exact path="/"
        render={routeProps => {
          return <Forms {...routeProps} addNewMember={addNewMember}/>
        }}
      />
      <Route
        exact path="/lastlog"
        render={routeProps => {
          return <LastLog {...routeProps}  exerciseList={exerciseList}/>
        }}
      />
      <Route
        path="/new-log"
        render={routeProps => {
          return <LogForm {...routeProps} addNewExercise={addNewExercise} />;
        }}
      />
    </div>
  );
}
export default App;