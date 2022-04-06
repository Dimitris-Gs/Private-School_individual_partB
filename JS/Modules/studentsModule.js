const Student = require('../Models/students');
const mysql = require('mysql2/promise');
const create = require('prompt-sync');
const configDetails = require('../config');

// show all students from database
async function getAllStudents() {
  try {
    const conn = await mysql.createConnection(configDetails);
    const [rows] = await conn.query("SELECT * FROM students");
    rows.forEach(function (row) {
      let student = `id: ${row.id} firstname: ${row.firstName} lastname: ${row.lastName} dateOfBirth: ${row.date_of_birth.toLocaleDateString()} tuitionFees: ${row.tuitionFees}`
      console.log(student);
    });
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// user inputs to database for students
async function createStudent(student) {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `INSERT INTO students (firstName,lastName,date_of_birth,tuitionFees) VALUES (?,?,?,?)`;
    const [result] = await conn.execute(sql,
      [
        student.firstName,
        student.lastName,
        student.date_of_birth,
        student.tuitionFees,
      ]);
    console.log(`${result.affectedRows} student(s) created`);
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

module.exports.getAllStudents = getAllStudents;
module.exports.createStudent = createStudent;