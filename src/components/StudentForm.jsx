// src/components/StudentForm.js
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { StudentContext } from '../context/StudentContext'; // Import the context

function StudentForm() {
  const { students, setStudents, selectedStudent, setSelectedStudent } = useContext(StudentContext); // Access context data
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setSubject(selectedStudent.subject);
      setMarks(selectedStudent.marks);
    }
  }, [selectedStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedStudent) {
        // Update existing student
        console.log(selectedStudent);
        
        await axios.put(
          `https://teacherportalbackend.up.railway.app/api/students/${selectedStudent._id}`,
          { name, subject, marks },
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );

        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student._id === selectedStudent._id
              ? { ...student, name, subject, marks }
              : student
          )
        );
        setSelectedStudent(null);
      } else {
        // Add new student
        const response = await axios.post(
          'https://teacherportalbackend.up.railway.app/api/students',
          { name, subject, marks },
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );
        setStudents((prevStudents) => [...prevStudents, response.data]);
      }
      setName('');
      setSubject('');
      setMarks('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>{selectedStudent ? 'Edit Student' : 'Add New Student'}</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label>Marks:</label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          required
        />
        <button type="submit">{selectedStudent ? 'Update Student' : 'Add Student'}</button>
      </form>
    </div>
  );
}

export default StudentForm;
