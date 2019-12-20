import React, {useState} from 'react';
import Forms from './Forms';
// import Userlist from './Userlist';
import './App.css';
import styled from 'styled-components';
//import logo from './Minimallogo.png';
const Style = styled.div`
display: flex;
margin: 0 auto;
width: 58%;
padding: 25%;
background #18181E ;
color: #DEC79B;
`
// const Img = styled.img `
// width: 2%;
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


  return (
    // <Img><img src={logo} alt="Logo" />;</Img>
    <Style>
    <div className="App">
      <h2>Minimal Lift</h2>
      <Forms addNewMember={addNewMember}/>
    </div>
    </Style>
  );
};

export default App;
