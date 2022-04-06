const Course = require('./Models/courses');
const Student = require('./Models/students');
const Trainer = require('./Models/trainers');
const Assignment = require('./Models/assignments');
const prompt = require('prompt-sync')();
const configDetails = require('./config');

// user inputs in prompt for course
module.exports.getCourseFromUser = function () {
  const id = prompt("Enter id: ");
  const title = prompt('Enter title: ');
  const courseStream = prompt('Enter courseStream: ');
  const courseType = prompt('Enter courseType: ');
  const start_date = prompt('Enter start_date: ');
  const end_date = prompt('Enter end_date: ');
  return new Course(id, title, courseStream, courseType, start_date, end_date);
}

// user inputs in prompt for students
module.exports.getStudentFromUser = function () {
  const id = prompt("Enter id: ");
  const firstName = prompt('Enter FirstName: ');
  const lastName = prompt('Enter lastName: ');
  const date_of_birth = prompt('Enter date_of_birth: ');
  const tuitionFees = prompt('Enter tuitionFees: ');
  return new Student(id, firstName, lastName, date_of_birth, tuitionFees);
}

// user inputs in prompt for trainers
module.exports.getTrainerFromUser = function () {
  const id = prompt("Enter id: ");
  const firstName = prompt('Enter firstName: ');
  const lastName = prompt('Enter lastName: ');
  const trainerSubject = prompt('Enter trainer Subject: ');
  return new Trainer(id, firstName, lastName, trainerSubject);
}

// user inputs in prompt for assignments
module.exports.getAssignmentFromUser = function () {
  const id = prompt("Enter id: ");
  const title = prompt("Enter Assignments Title: ");
  const assignmentDescription = prompt("Enter Assignments's Description: ");
  const sub_date_time = prompt("Enter Assignments's Sub Date Time: ");
  const oralMark = prompt("Enter Assignments's Oral Mark: ");
  const totalMark = prompt("Enter Assignments's Total Mark: ");
  return new Assignment(id, title, assignmentDescription, sub_date_time, oralMark, totalMark);
}

// user inputs in prompt for students per course 
module.exports.getStudentsPerCourseFromUser = function () {
  const studentId = prompt("Enter Student id: ");
  const courseId = prompt("Enter Course id: ");
  return { studentId, courseId }
}

// user inputs in prompt for trainers per course 
module.exports.getTrainersPerCourseFromUser = function () {
  const trainerId = prompt("Enter Trainer id: ");
  const courseId = prompt("Enter Course id: ");
  return { trainerId, courseId };
}

// user inputs for assignments per course per student 
module.exports.getAssignmentsPerCoursePerStudentFromUser = function () {
  const assignmentId = ("Enter Assignment id: ");
  const courseId = prompt("Enter Course id: ");
  const studentId = prompt("Enter Student id: ");
  return { assignmentId, courseId, studentId };
}
