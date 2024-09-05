// src/components/Home.js
import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import '../styles.css';
import { StudentContext } from '../context/StudentContext'; // Import the context

function Home() {
  const { selectedStudent } = useContext(StudentContext); // Access selectedStudent from context
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="container">
      <div className="displayFlex">
        <h2 style={{ color: 'red' }}>Tailwebs</h2>
        <div className="displayFlexRight">
          <button><Link to={'/home'}>Home</Link></button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <StudentList />
      
      <div className="addContainer">
        <button onClick={() => setToggle(!toggle)}>
          {selectedStudent ? 'Edit Student' : 'Add Students'}
        </button>
        {toggle && <StudentForm />}
      </div>
    </div>
  );
}

export default Home;
