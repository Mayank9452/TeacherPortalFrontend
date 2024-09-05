// src/components/StudentList.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext'; // Import the context

function StudentList() {
  const { students, handleDelete, handleEdit } = useContext(StudentContext); // Access students, handleDelete, and handleEdit from context

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.marks}</td>
              <td className='buttonFunct'>
                <button className = 'editBtn' onClick={() => handleEdit(student)}>Edit</button>
                <button className = 'deleteBtn' onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
