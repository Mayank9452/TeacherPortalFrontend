// src/context/StudentContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the Student Context
export const StudentContext = createContext();

// Create a provider component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://teacherportalbackend.up.railway.app/api/students', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://teacherportalbackend.up.railway.app/api/students/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  return (
    <StudentContext.Provider
      value={{ students, setStudents, selectedStudent, setSelectedStudent, handleDelete, handleEdit }}
    >
      {children}
    </StudentContext.Provider>
  );
};
