import React, { useState, useEffect } from "react";
// import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import LogCard from "./LogCard";


const InputField = styled.input`
  margin-left: 6px;
`

const Button = styled.button`
  margin: 10px;
`

export default function SearchForm({ exerciseList }) {

  const [searchDate, setSearchDate] = useState("");

  // const [searchResults, setSearchResults] = useState(exerciseList);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {}, [searchDate]);

  const handleChange = event => {
    setSearchDate(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();

    const results = exerciseList.filter(exercise => {
      return exercise.date === searchDate;
    });

    setSearchResults(results);
    console.log("this is results", searchResults);
  };


  return (
    <section className="search-form">
      <form>
        <label htmlFor="date">Search for date:</label>
        <InputField
          id="date"
          type="date"
          onChange={handleChange}
          // value={searchTerm}
        />
        <Button type="submit" onClick={submitForm}>Search</Button>
      </form>
      {searchResults.map(exercise => (
        <LogCard exercise={exercise} />
      ))}
    </section>
  );
}
