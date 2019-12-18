import React, { useState } from 'react';
import Form from './Form';
import './App.css';

//Import the useState hook and set up a state property for your team members list
//Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them
//need name, email and role for each TM. 
//render list of TM's
function App() {

const [teamMembers, setTeamMembers] = useState([
  {
      name: 'Jasmine',
      email: 'jasmine.tery91@gmail.com',
      role: 'Full stack web dev'
}
]); //base TM info

//function for new TM's
const addNewTM = teamMember =>{
  const newTeamMember ={
    name: teamMember.name,
    email:teamMember.email,
    role: teamMember.role
  };
  setTeamMembers([...teamMembers, newTeamMember]);
};


  return (
    <div className="App">
      <header className="App-header">
        <h1> Team Members! </h1>
      </header>
{/* 
<Form addNewTM ={addNewTM} /> */}
{/* <teamMembers /> */}


    </div>
  );
}

export default App;
