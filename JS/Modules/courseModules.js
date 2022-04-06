const Course = require('../Models/courses');
const mysql = require('mysql2/promise');
const create = require('prompt-sync');
const configDetails = require('../config');


// get all courses from database
async function getAllCourses() {
  try {
    const conn = await mysql.createConnection(configDetails);
    const [rows] = await conn.query("SELECT * FROM courses");
    rows.forEach(function (row) {
      let course = `id: ${row.id} title: ${row.title} stream: ${row.courseStream} type: ${row.courseType} start_date ${row.start_date.toLocaleDateString()} end_date ${row.end_date.toLocaleDateString()}`
      console.log(course);
      return course;
    });
    await conn.end();
  } catch (ex) {
    console.log(ex)
    console.log(ex.message);
    process.exit();
  }
}

// user inputs for course to database
async function createCourse(course) {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `INSERT INTO courses (title, courseStream, courseType, start_date, end_date) VALUES(?, ?, ?, ?, ?)`;
    const [result] = await conn.execute(sql,
      [
        course.title,
        course.courseStream,
        course.courseType,
        course.start_date,
        course.end_date
      ]);
    console.log(`${result.affectedRows} course(s) created`);
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

module.exports.getAllCourses = getAllCourses;
module.exports.createCourse = createCourse;

