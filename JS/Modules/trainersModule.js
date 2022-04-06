const Trainer = require('../Models/trainers');
const mysql = require('mysql2/promise');
const configDetails = require('../config');

// show all trainers from database 
async function getAllTrainers() {
  try {
    const conn = await mysql.createConnection(configDetails);
    const [rows] = await conn.query("SELECT * FROM trainers");
    rows.forEach(function (row) {
      let trainer = `id: ${row.id} firstName: ${row.firstName} lastName: ${row.lastName} trainerSubject: ${row.trainerSubject}`
      console.log(trainer);
    });
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

// user inputs to database fro trainers
async function createTrainer(trainer) {
  try {
    const conn = await mysql.createConnection(configDetails);
    let sql = `INSERT INTO trainers (firstName,lastName,trainerSubject) VALUES (?,?,?)`;
    const [result] = await conn.execute(sql,
      [
        trainer.firstName,
        trainer.lastName,
        trainer.trainerSubject
      ]);
    console.log(`${result.affectedRows} trainer(s) created`);
    await conn.end();
  } catch (ex) {
    console.log(ex.message);
    process.exit();
  }
}

module.exports.getAllTrainers = getAllTrainers;
module.exports.createTrainer = createTrainer;

