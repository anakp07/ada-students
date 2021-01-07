import React, {useState} from 'react';
import './NewStudentForm.css';
import PropTypes from 'prop-types';

const NewStudentForm = (props) => {

    const [student, setStudent] = useState({
        fullName: '',
        email: '',
    });

    const onInputChange = (event) => {

        const newFormFieldValues = {
            ...student,
        }
        const {name, value} = event.target;

        newFormFieldValues[name] = value;
        setStudent(newFormFieldValues);
    }

    // const onNameChange = (event) => {
    //     const newStudent = {
    //         ...student,  // <-- gets all fiels of students and puts them in new object
    //         fullName: event.target.value
    //     }
    //     setStudent(newStudent);
    // };
    
    // const onEmailChange = (event) => {
    //     const newStudent = {
    //         ...student,
    //         email: event.target.value,
    //     }
    //     setStudent(newStudent);
    //     }; 

        const onFormSubmit = (event) => {
            event.preventDefault();
            console.log('submitting form');

            if (student.fullName !== '' && student.email !== ''){
                // send data back to app 
                props.onSubmitCallback(student);

                setStudent({
                    fullName: '',
                    email: '',
                });
            }
        }

        return(
            <form 
            onSubmit={onFormSubmit}
            className="new-student-form">
                <div>
                    <label htmlFor="fullName">Name:</label>
                    <input
                    name="fullName"
                    value={student.fullName}
                    onChange={onInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    name="email" 
                    value={student.email}
                    onChange={onInputChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Add Student"
                />
            </form>
        );
    };

NewStudentForm.propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
};
export default NewStudentForm; 