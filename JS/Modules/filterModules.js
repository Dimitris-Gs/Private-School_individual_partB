const mysql = require('mysql2/promise');
const _ = require('lodash');
const configDetails = require('../config');

// shaw all students per course from database
async function showAllStudentsPerCourse() {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `SELECT students.firstName , students.lastName , courses.title 
          FROM studentspercourse 
            INNER JOIN students ON studentspercourse.studentId = students.id
            INNER JOIN courses ON studentspercourse.courseId = courses.id;`
    const [rows] = await conn.query(sql);
    let rowGroupedByStudentsName = _.groupBy(rows, 'title');
    _.forEach(rowGroupedByStudentsName, function (textRow, key) {
      console.log(key);
      for (let item of textRow) {
        console.log(`\t${item.firstName} ${item.lastName}`);
      }
    });
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// user ipnuts to database for students per course 
async function insertStudentsPerCourse(studentsPerCourse) {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `INSERT INTO studentsPerCourse  (studentId, courseId) 
              VALUES (?,?);`;

    const [result] = await conn.execute(sql, [
      studentsPerCourse.studentId,
      studentsPerCourse.courseId
    ]);
    console.log(`${result.affectedRows} Course student(s) created`);
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// show all trainers per course form database
async function showAllTrainersPerCourse() {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `SELECT trainers.firstName , trainers.lastName , courses.title
          FROM trainersPerCourse 
          INNER JOIN trainers ON trainersPerCourse.trainerID = trainers.id
          INNER JOIN courses ON trainersPerCourse.courseID = courses.id;`
    const [rows] = await conn.query(sql);
    let rowGroupedByTrainersName = _.groupBy(rows, 'title');
    _.forEach(rowGroupedByTrainersName, function (textRow, key) {
      console.log(key);
      for (let item of textRow) {
        console.log(`\t${item.firstName} ${item.lastName}`);
      }
    });
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// user iputs t database for trainers per course 
async function insertTrainersPerCourse(trainersPerCourse) {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `INSERT INTO trainersPerCourse (trainerId, courseId) 
              VALUES (?,?)`;
    const [result] = await conn.execute(sql, [
      trainersPerCourse.trainerId,
      trainersPerCourse.courseId
    ]);
    console.log(`${result.affectedRows} Course Trainer(s) created`);
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// show all the assignments per course per student from database 
async function ShowAllAssignmentsPerCoursePerStudent() {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `SELECT assignments.title , courses.title , CONCAT(students.firstName, " ", students.lastName) AS fullName 
            FROM assignmentsPerCoursePerStudent
            INNER JOIN assignments ON assignmentsPerCoursePerStudent.assignmentId = assignments.id
            INNER JOIN courses ON assignmentsPerCoursePerStudent.courseId = courses.id
            INNER JOIN students ON assignmentsPerCoursePerStudent.studentId = students.id;`
    const [rows] = await conn.query(sql);
    let rowsGroupedByCourse = _.groupBy(rows, 'title');
    _.forEach(rowsGroupedByCourse, function (textRow, key) {
      console.log(key);
      let rowsGroupedByStudents = _.groupBy(textRow, 'fullName');
      _.forEach(rowsGroupedByStudents, function (textRow1, key1) {
        console.log(`\t${key1}`);
        for (let item of textRow1) {
          console.log(`\t\t${item.fullName}`);
        }
      });
    });
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// user inputs to database for assignments per course per student 
async function insertAssignmentsPerCoursePerStudent(assignmentsPerCoursePerStudent) {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `INSERT INTO assignmentsPerCoursePerStudent (assignmentId, courseId, studentId)
              VALUES (?,?,?)`;
    const [result] = await conn.execute(sql, [
      assignmentsPerCoursePerStudent.assignmentId,
      assignmentsPerCoursePerStudent.courseId,
      assignmentsPerCoursePerStudent.studentId
    ]);
    console.log(`${result.affectedRows} Assignment Course Student(s) created`);
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

module.exports.showAllStudentsPerCourse = showAllStudentsPerCourse;
module.exports.insertStudentsPerCourse = insertStudentsPerCourse;
module.exports.showAllTrainersPerCourse = showAllTrainersPerCourse;
module.exports.insertTrainersPerCourse = insertTrainersPerCourse;
module.exports.ShowAllAssignmentsPerCoursePerStudent = ShowAllAssignmentsPerCoursePerStudent;
module.exports.insertAssignmentsPerCoursePerStudent = insertAssignmentsPerCoursePerStudent;