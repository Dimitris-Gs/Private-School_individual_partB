const Entity = require('./entity');
// assignments constructor 
class Assignment extends Entity {
  constructor(id, title, assignmentDescription, sub_date_time, oralMark, totalMakr) {
    super(id);
    this.title = title;
    this.assignmentDescription = assignmentDescription;
    this.sub_date_time = subDatsub_date_timeeTime;
    this.oralMark = oralMark;
    this.totalMakr = totalMakr;
  }
}

module.exports = Assignment;