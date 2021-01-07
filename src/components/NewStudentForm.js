import React, {useState} from 'react';
import './NewStudentForm.css';

const NewStudentForm = (props) => {

    const [student, setStudent] = useState({
        fullName: '',
        email: '',
    });

    const onNameChange = (event) => {
        const newStudent = {
            ...student,  // <-- gets all fiels of students and puts them in new object
            fullName: event.target.value
        }
        setStudent(newStudent);
    };
    
    const onEmailChange = (event) => {
        const newStudent = {
            ...student,
            email: event.target.value,
        }
        setStudent(newStudent);
        }

        return(
            <form className="new-student-form">
                <div>
                    <label htmlFor="fullName">Name:</label>
                    <input
                    name="fullName"
                    value={student.fullName}
                    onChange={onNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    name="email" 
                    value={student.email}
                    onChange={onEmailChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Add Student"
                />
            </form>
        );
    };


export default NewStudentForm; 