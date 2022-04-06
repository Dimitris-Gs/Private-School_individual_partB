const Entity = require('./entity');
// students constructor
class Student extends Entity {
  constructor(id, firstName, lastName, date_of_birth, tuitionFees) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.date_of_birth = date_of_birth;
    this.tuitionFees = tuitionFees;
  }
}

module.exports = Student;