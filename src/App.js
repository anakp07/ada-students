import React, {useState}  from 'react';
import NewStudentForm from './components/NewStudentForm';
import StudentCollection from './components/StudentCollection';
import './App.css';


// if we arent getting from a static source, we might be getting from an API
const students = [
  {   id: 1,
      fullName: "Ada Lovelace",
      email: "ada@lovelace.uk",
  },
  {   id: 2,
      fullName: "Katherine Johnson",
      email: "Kat@nasa.gov",
  },
  {
    id: 3,
    fullName: "Ana Parada",
    email: "ana@anakp.org",
  },
];

function App() {
  const [studentList, setStudentList] = useState(students)
  
  const updateStudent =(updatedStudent) => {
    const students = [];
    studentList.forEach( (student) => {
      if (student.id == updateStudent.id) {
        students.push(updatedStudent); // grabs new data and discards old 
      } else {
        students.push(student); // grabs the unchanged data --> maintating list order
      }
    });

    setStudentList(students);

  };

  return (
    <div className="App">
      <StudentCollection students={studentList} onUpdateStudent={updateStudent}/>
      <NewStudentForm />
    </div>
    // <div className="Student">
    //   <header className="App-header">
    //     <h1> Ada Students!</h1>
    //   </header>
    //   <main>
    //   <StudentCollection students ={students} />
    //   </main>
    // </div>
  );
}

export default App;
