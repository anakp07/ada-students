// src/components/StudentCollection.js
import React from 'react';

import Student from './Student';

const StudentCollection = (props) => {
    const studentComponents = props.students.map((student, i) => {
        return(
            <Student
            fullName={student.fullName}
            email={student.email}
            birthdate={student.birthdate}
            key={student.email}
            />
        );
    });
    return (
    <ul className="StudentCollection">
        {studentComponents}

    </ul>
    );
};

export default StudentCollection;