import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Student = (props) => {
  // Component functions always return JSX
  const [present, setPresent]= useState(props.present); //  hooks -> present = variable setPresent = function to update that state
  const [fullName, setFullName] = useState(props.fullName);

  const onButtonClick = () => setPresent(!present);  //EVENT HANDLER method this is the event handler  when event is triggered
  // taking current value of present, negating it and update value using setPresent 
  // toggle the value will flip between true and false 
  // any kind of code of how we choose to update of this specific component 

    const onFullNameInputChange = (event) => { //EVENT HANDLER 
        setFullName(event.target.value);
    };

    return (
        <div>
        <h3>{fullName}</h3>
        <input value= {fullName} onChange={onFullNameInputChange}/> 
        <ul>
            <li>Class: C13</li>
            <li>Birthday: {props.birthday}</li>
            <li>Email: {props.email}</li>
        </ul> 
        <button onClick={onButtonClick}> 
            Mark {present? 'Absent': 'Present'}
        </button>
        </div>
    );
};
 // LINE 23:  event Listener (ONCLICK) when element is clicked then run the JS function on right  in curly because we use function to pass --> only reference not calling it 
Student.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string,
    birthday: PropTypes.string,
};

export default Student;