import React from 'react';
// import Student from './components/Student';
import StudentCollection from './components/StudentCollection';
import './App.css';

const studentList = [
  {
      fullName: "Ada Lovelace",
      email: "ada@lovelace.uk",
  },
  {
      fullName: "Katherine Johnson",
      email: "Kat@nasa.gov",
  },
  {
    fullName: "Ana Parada",
    email: "ana@anakp.org",
  },
];

function App() {
  return (
    <div className="Student">
      <header className="App-header">
        <h1> Ada Students!</h1>
      </header>
      <main>
      <StudentCollection students ={studentList} />
      </main>
    </div>
  );
}

export default App;
