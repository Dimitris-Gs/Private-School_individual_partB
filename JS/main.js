const assignmentModule = require('./Modules/assignmentModules');
const courseModules = require('./Modules/courseModules');
const studentModules = require('./Modules/studentsModule');
const trainerModules = require('./Modules/trainersModule');
const filterModules = require('./Modules/filterModules');
const UI = require('./ui');
const prompt = require('prompt-sync')();
const configDetails = require('./config');

// create the entry poitn for the programm 
async function main() {

  while (true) {
    //On Node v12.14.1 , this is happening for me for all multi-line strings, even without template literals.
    //One easy workaround for this -- print your multi-line prompt using console.log and only print the very last line of the prompt using prompt-sync. Problem solved.
    // Option menu 
    console.log('Press 1 to enter courses');
    console.log('Press 2 to enter trainers');
    console.log('Press 3 to enter students');
    console.log('Press 4 to enter assignmets');
    console.log('Press 5 to enter course students');
    console.log('Press 6 to enter course trainers');
    console.log('Press 7 to enter assignments per student per course');
    console.log('Press 8 to view all courses');
    console.log('Press 9 to view all trainers');
    console.log('Press 10 to view all students');
    console.log('Press 11 to view all assignments');
    console.log('Press 12 to view all course students');
    console.log('Press 13 to view all courses trainers');
    console.log('Press 14 to view all assignments per student per course');
    console.log("Press any other key to exit");
    let choice = parseInt(prompt('What do you want to do? Select a number: '));
    switch (choice) {
      case 1:
        // iputs from user for courses use the prompts from ui and also use the creation from Modules to insert them in the database propertly (await uses because of the async                 functions the same happens until the case 7!)
        const course1 = UI.getCourseFromUser();
        await courseModules.createCourse(course1);
        break;
      case 2:
        const trainer1 = UI.getTrainerFromUser();
        await trainerModules.createTrainer(trainer1);
        break;
      case 3:
        const student1 = UI.getStudentFromUser();
        await studentModules.createStudent(student1);
        break;
      case 4:
        const assignmet1 = UI.getAssignmentFromUser();
        await assignmentModule.createAssignment(assignmet1);
      case 5:
        const courseStudent = UI.getStudentsPerCourseFromUser();
        console.log(courseStudent);
        await filterModules.insertStudentsPerCourse(courseStudent);
        break;
      case 6:
        const courseTrainer = UI.getTrainersPerCourseFromUser();
        await filterModules.insertTrainersPerCourse(courseTrainer);
        break;
      case 7:
        const assignmentsCourseStudent = UI.getAssignmentsPerCoursePerStudentFromUser();
        await filterModules.insertAssignmentsPerCoursePerStudent(assignmentsCourseStudent);
        break;
      case 8:
        // get all the data from database and print them to terminal from modules, the same until case 14;
        await courseModules.getAllCourses();
        break;
      case 9:
        await trainerModules.getAllTrainers();
        break;
      case 10:
        await studentModules.getAllStudents();
        break;
      case 11:
        await assignmentModule.getAllAssignments();
        break;
      case 12:
        await filterModules.showAllStudentsPerCourse();
        break;
      case 13:
        await filterModules.showAllTrainersPerCourse();
        break;
      case 14:
        await filterModules.ShowAllAssignmentsPerCoursePerStudent();
        break;
      default:
        process.exit(0)
    }
  }
}

main();


