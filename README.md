## Live Demo
Check out the live demo of our project here: [Live Demo](https://teacherportalfrontend.netlify.app/)

# Project Title
Teacher Portal


## Introduction
creating a robust teacher portal with both front-end and back-end components using React.js and Node.js respectively. The portal will
include a login screen and a home screen for teachers, which will also serve as the student listing screen. Additionally, you will need to implement functionality for managing student listings and adding new students.

## Project Reuirement
1. Login Functionality:
   * Implement actual API-based login functionality for teachers.
   * Create a login screen where teachers can input their credentials.
   * Upon successful login, authenticate the user by calling the backend API.
   * Handle authentication errors and provide appropriate feedback to the user.

2. Teacher Portal Home & Student Listing Screen:
   * After successful login, redirect the user to the home screen of the teacher portal, which also serves as the student listing screen.
   * Display a list of students with their Name, Subject Name, and Marks.
   * Include options to edit and delete student details.
   * Implement functionality to edit student details inline and update the state accordingly.
  
3. New Student Entry:
   * Provide a feature for adding details of a new student using a popup/modal.
   * When adding a new student.
   * Check if a student with the same name and subject combination already exists in the database.
   * If a matching record is found, update the marks for that student by adding the new marks to the existing ones.
   * If no matching record is found, create a new student record.



## Technical Requirements
1. Use React.js for building the front-end components.
2. Implement state management using Redux or Context API for better scalability.
3. Utilize modern UI libraries like Material-UI or Ant Design for efficient and responsive design.
4. Ensure proper error handling and data validation on the client-side.


## Installation
To install, follow these steps:

1. Clone the repository.
2. Run `npm install`.

## How to use this project
To use this project, run the following command:
1. npm run dev

## Additional Requirements
Login with following credentials on Login Page -
    username : teacher1,
    password : password123
