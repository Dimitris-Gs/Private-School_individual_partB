const Entity = require('./entity');
// Trainers constructor 
class Trainer extends Entity {
  constructor(id, firstName, lastName, trainerSubject) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.trainerSubject = trainerSubject;
  }

}

module.exports = Trainer;