const Entity = require('./entity');

// course consturtor
class Course extends Entity {
  constructor(id, title, courseStream, courseType, start_date, end_date) {
    super(id);
    this.title = title;
    this.courseStream = courseStream;
    this.courseType = courseType;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}

module.exports = Course;
