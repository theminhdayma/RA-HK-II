import React from 'react'
import Student from './Student';

interface Student {
  name: string,
  id: string,
  email: string,
  birth: string,
}

interface StudentListProps {
  students: Student[];
}

export default function StudentList({ students }: StudentListProps) {
  return (
    <table>
      <thead>
        <tr className='title-tr'>
          <td>STT</td>
          <td>Mã sinh viên</td>
          <td>Tên sinh viên</td>
          <td>Ngày sinh</td>
          <td>Email</td>
          <td>Trạng thái</td>
          <td>Chức năng</td>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <Student key={student.id} student={student} index={index + 1} />
        ))}
      </tbody>
    </table>
  )
}
