import React, { useState } from 'react';
import Form from './Form';
import './App.css';
import TeamMember from './TeamMember';

//Import the useState hook and set up a state property for your team members list
//Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them
//need name, email and role for each TM. 
//render list of TM's
//import form
//import TM
//function to add new TM's on form
function App() {

const [teamMembers, setTeamMembers] = useState([
  {
      // id:1,
      name: "Jasmine",
      email: "jasmine.tery91@gmail.com",
      role: "Full stack web dev"
}, //my info
{
  // id:1,
  name: "Person",
  email: "Person@gmail.com",
  role: "Cool Person"
}
]); //test TM info

//function for new TM's
const addNewTM = tm => {
  const newTeamMember = {
    id: Date.now(),
    name: tm.name,
    email:tm.email,
    role: tm.role
  };
  setTeamMembers([...teamMembers, newTeamMember]);
};
 //set TM , spread team memberrs & add new team member to it

  return (
    <div className="App">
        <h1> Team Members! </h1>
{/* 
<Form addNewTM = {addNewTM} /> */}
<TeamMember teamMembers ={teamMembers} />

    </div>
  );
}

export default App;
