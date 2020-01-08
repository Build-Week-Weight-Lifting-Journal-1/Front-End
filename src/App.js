import React, {useState} from 'react';
import Forms from './Forms';
// import Userlist from './Userlist';
import './App.css';
import styled from 'styled-components';
import logo from './minimalll.PNG';
const Style = styled.div`
display: flex;
margin: 0 auto;
justify-content: center;
height: 100vh;
font-size: 1.5rem;
// padding: 25%;
background #18181E ;
color: #DEC79B;
`

function App() {
  const [members, setMembers] = useState([{
    name: '',
    email:'',
    password: ''
  }]);
  const addNewMember = teamMember =>{
    setMembers([...members, teamMember]);
  };

  return (
    <Style>
    <div className="App">
    <img src={logo} alt="Logo"/>
      <Forms addNewMember={addNewMember}/>
    </div>
   </Style>
  );
};

export default App;
