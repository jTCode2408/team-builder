// In Form.js build out your markup
 //Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination)
// Import the useState hook and utilize what we learned about two-way data binding
// Render your Form component in App and pass a setter method (the set_____ method from your team members state in App) down to it so you can add team members to your state.

import React, {useState} from 'react';


const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    //handler for form changes

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name] : e.target.value
        });
        console.log(e.target.value);
    };
    
    const submitForm =e => {
        e.preventDefault ();
        props.addNewTM(member);
        setMember ({name:"", email: "", role: ""});
    };

    return (
        <form onSubmit = {submitForm}>
<label htmlFor ="name">Name</label>
<input
    type ="text"
    placeholder = "name"
    onChange ={handleChanges}
    name = "name"
    value = {member.name} />

<label htmlFor ="email">Email</label>
<input
    type ="email"
    placeholder = "email"
    onChange ={handleChanges}
    name = "email"
    value = {member.email} />

<label htmlFor ="role">Role</label>
<input
    type ="text"
    placeholder = "role"
    onChange ={handleChanges}
    name = "role"
    value = {member.role} />

<button type ="submit">Add Member</button>

        </form>
    );
};

export default Form;
