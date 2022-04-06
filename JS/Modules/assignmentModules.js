const Assignment = require('../Models/assignments');
const mysql = require('mysql2/promise');
const configDetails = require('../config');

// get all the assignmenys from database
async function getAllAssignments() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows] = await conn.query("SELECT * FROM assignments");
        rows.forEach(function (row) {
            let assignmet = `id: ${row.id} title: ${row.title} assignmentDescription: ${row.assignmentDescription} sub_date_time: ${row.sub_date_time.toLocaleDateString()} oralMark: ${row.oralMark} totalMakr: ${row.totalMakr}`
            console.log(assignmet);
        });
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

// user inserts  assignments to database 
async function createAssignment(assignment) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = `INSERT INTO assignments (title,assignmentDescription,sub_date_time,oralMark,totalMakr) VALUES (?,?,?,?,?)`;
        const [result] = await conn.execute(sql,
            [
                assignment.title,
                assignment.assignmentDescription,
                assignment.sub_date_time,
                assignment.oralMark,
                assignment.totalMakr,
            ]);
        console.log(`${result.affectedRows} assignment(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

module.exports.getAllAssignments = getAllAssignments;
module.exports.createAssignment = createAssignment;