import React from 'react';
//set up team member component
//add to App
//return name, email, role for every TM

const TeamMember = props =>{
    console.log(props);
return (
<div className = "teamList">

{props.teamMembers.map( teamMember => (
    <div className ="member"
    key= {teamMember.id}>
   <h2>{teamMember.name}</h2>
    <h3>{teamMember.email}</h3>
    <h3>  {teamMember.role}</h3>
</div>
))}

</div>
);

};

export default TeamMember;