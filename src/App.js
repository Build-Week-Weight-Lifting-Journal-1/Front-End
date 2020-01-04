import React, { useState } from 'react';
import './App.css';
import LogForm from "./components/LogForm";
import { Route } from "react-router-dom";
import LastLog from "./components/LastLog";
import Header from "./components/Header";

function App() {

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
      <Header />
      <Route 
        exact path="/" 
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