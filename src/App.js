import React from 'react';
import Student from './components/Student';
import StudentCollection from './components/StudentCollection';
import './App.css';

const students = [
  {
      fullName: "Ada Lovelace",
      email: "ada@lovelace.uk",
  },
  {
      fullName: "Katherine Johnson",
      email: "Kat@nasa.gov",
  },
];

function App() {
  return (
    <div className="Student">
      <header className="App-header">
      <StudentCollection students ={students} />
      </header>
    </div>
  );
}

export default App;
