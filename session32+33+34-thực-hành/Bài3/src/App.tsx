import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import StudentList from './components/StudentList';

interface Student {
  name: string,
  id: string,
  email: string,
  birth: string,
}

function App() {
  let [studentList, setStudentList] = useState<Student[]>(function () {
    let studentList: Student[] = JSON.parse(localStorage.getItem('students') || '[]');
    if (studentList.length === 0) {
      return [];
    }
    return studentList;
  });

  const addStudent = (student: Student) => {
    const newStudentList = [...studentList, student];
    setStudentList(newStudentList);
    localStorage.setItem('students', JSON.stringify(newStudentList));
  }

  return (
    <div>
      <Header addStudent={addStudent} />
      <StudentList students={studentList} />
    </div>
  )
}

export default App;
