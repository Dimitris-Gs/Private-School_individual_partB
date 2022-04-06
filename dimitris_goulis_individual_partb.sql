create database dimitris_gioulis_individual_partb;
use dimitris_gioulis_individual_partb;

create table if not exists courses (
		id int AUTO_INCREMENT,
        title varchar(45),
        courseStream varchar(45),
        courseType varchar(45),
        start_date date,
        end_date date,
        primary key (id)
);
 create table if not exists students (
		id int AUTO_INCREMENT,
        firstName varchar(45),
        lastName varchar(45),
        date_of_birth date,
        tuitionFees varchar(45),
        primary key (id)
);       
 create table if not exists trainers (
		id int AUTO_INCREMENT,
        firstName varchar(45) ,
        lastName varchar(45),
        trainerSubject varchar(45),
        primary key(id) 
);       
 create table if not exists assignments (
		id int AUTO_INCREMENT,
        title varchar(45) ,
        assignmentDescription varchar(100),
        sub_date_time date ,
        oralMark int not null ,
        totalMark int not null,
        primary key(id)
);     
 create table if not exists studentsPerCourse (
		SPCID int auto_increment,
        studentId int not null,
        courseId int not null ,
        primary key (SPCID),
        foreign key (studentId) references students(id),
        foreign key (courseId) references courses(id)
);
 create table if not exists trainersPerCourse (
		TPCID int auto_increment,
        trainerId int not null,
        courseId int not null ,
        primary key(TPCID),
        foreign key (trainerID) references trainers(id),
        foreign key (courseID) references courses (id)
);        
 create table if not exists assignmentsPerCourse (
		APCID int auto_increment,
        assignmentId int not null ,
        courseId int not null,
        primary key (APCID),
        foreign key (assignmentId) references assignments(id),
		foreign key (courseId) references courses (id) 
);
  create table if not exists assignmentsPerCoursePerStudent (
		APCPSID int auto_increment,
		assignmentId int not null ,
        courseId int not null,
        studentId int not null,
        primary key (APCPSID),
        foreign key (assignmentId) references assignments(id),
		foreign key (courseId) references courses (id),
        foreign key (studentId) references students(id)
);
insert into courses(title, courseStream, courseType, start_date, end_date)
values 
	('CB8', 'Java', 'fullTime', '2019-01-01', '2019-03-31' ),
	('CB8', 'Java', 'partTime', '2019-01-01', '2019-06-30' ),
	('CB8', 'C#', 'fullTime', '2019-01-01', '2019-03-31' ),
	('CB8', 'C#', 'partTime', '2019-01-01', '2019-06-30');
    
insert into students (firstName, lastName, date_of_birth, tuitionFees) 
values 
	('Giannis', 'Panou', '1998-05-17', 'fullTime'),
	('Giorgos', 'Iwanou', '1995-05-17', 'fullTime'),
	('Mixalis', 'Kostis', '1994-05-17', 'partTime'),
	('Panagiwtis', 'Athanasiou', '1993-05-17', 'partTime'),
	('Nikos', 'Nikou', '1994-05-17', 'fullTime'),
	('Dimitris', 'Vasos', '1999-05-17', 'fullTime'),
	('Maria', 'Kwsta', '1993-05-17', 'fullTime'),
	('Eva', 'Papa', '1995-05-17', 'fullTime'),
	('Kwstas', 'Dimos', '1994-05-17', 'fullTime'),
	('Kwntsantina', 'Mhxail', '1998-05-17', 'partTime'),
	('Aggeliki', 'Dimitiou', '1992-05-17', 'partTime'),
	('Argyro', 'Sioziou', '1993-05-17', 'partTime'),
	('Dimitra', 'Iwannidi', '1994-05-17', 'partTime'),
	('Fwtini', 'Aygerou', '1996-05-17', 'partTime'),
	('Xristos', 'Lampropoulos', '1997-05-17', 'partTime'),
	('Marios', 'Gewrgiou', '1998-05-17', 'partTime'),
	('Iwanna', 'Papa', '1993-05-17', 'partTime'),
	('Dimitris', 'Nikou', '1999-05-17', 'partTime'),
	('Thanos', 'Vassiliou', '1997-05-17', 'fullTime'),
	('Katerina', 'Mpalta', '1995-05-17', 'fullTime');
    
insert into trainers (firstName, lastName, trainerSubject) 
values 
	('Dimitris', 'Panagiotou', 'Java'),
    ('Panagiotis', 'Mpikas', 'Java'),
    ('Giwrgos', 'Pappas', 'Java'),
    ('Giannis', 'Dimou', 'Java'),
    ('Tasos', 'Xatzis', 'C#'),
    ('Kwstas', 'Anagnwstou', 'C#'),
    ('Xristos', 'Giannou', 'C#'),
    ('Panos', 'Panou', 'C#');
    
insert into assignments (title, assignmentDescription, sub_date_time, oralMark, totalMark)
values 
	('assignmentA', 'create app', '2019-01-15', '50', '40'),
    ('assignmentB', 'create app','2019-01-30', '50', '40' ),
    ('assignmentC', 'create app','2019-02-15', '50', '40' ),
    ('assignmentD', 'create app','2019-02-28', '50', '40' ),
	('assignmentE', 'create app','2019-03-15', '50', '40' ),
    ('individualA', 'create app','2019-03-30', '50', '40' ),
    ('group project', 'create app','2019-03-30', '50', '40' );
    
insert into studentsPerCourse (studentId, courseId )
values 
	(1,1),
    (1,2),
    (1,3),
    (2,2),
    (3,4),
    (4,3),
    (5,1);
    
insert into trainersPerCourse (trainerId, courseId)
values 
	(1,1),
    (1,2),
    (1,3),
    (1,4),
    (2,3),
    (2,1),
    (2,4),
    (4,3);
    
insert into assignmentsPerCourse (assignmentId, courseId)
values 
	(1,1),
    (2,1),
    (3,4),
    (4,3),
    (5,2),
    (6,4),
    (7,1),
    (1,2);
insert into assignmentsPerCoursePerStudent (assignmentId, courseId, studentId)
values 
	(1,1,1),
    (1,2,1),
    (1,1,3),
    (3,1,2),
    (4,1,2),
    (1,3,1),
    (2,1,4);
    
select students.firstName , students.lastName , courses.title 
from studentspercourse 
inner join students on studentspercourse.studentId = students.id
inner join courses on studentspercourse.courseId = courses.id;

select trainers.firstName , trainers.lastName , courses.title
from trainersPerCourse 
inner join trainers on trainersPerCourse.trainerID = trainers.id
inner join courses on trainersPerCourse.courseID = courses.id;

select assignments.title , courses.title
from assignmentsPerCourse
inner join assignments on assignmentsPerCourse.assignmentId = assignments.id
inner join courses on assignmentsPerCourse.courseId = courses.id;

select assignments.title , courses.title , students.firstName , students.lastName
from assignmentsPerCoursePerStudent
inner join assignments on assignmentsPerCoursePerStudent.assignmentId = assignments.id
inner join courses on assignmentsPerCoursePerStudent.courseId = courses.id
inner join students on assignmentsPerCoursePerStudent.studentId = students.id;

select students.firstName , students.lastName, COUNT(studentspercourse.courseId) as NumberOfCourses
from studentspercourse
inner join students on studentspercourse.studentId = students.id
group by  studentspercourse.studentId
HAVING COUNT(studentspercourse.courseId) > 1;

select * from courses;
select * from students;
select * from trainers;
select * from assignments;

-- drop table assignmentsPerCoursePerStudents;
-- drop table assignmentsPerCourse;
-- drop table trainersPerCourse;
-- drop table studentsPerCourse;
-- drop table assignments;
-- drop table trainers;
-- drop table students;
-- drop table courses;

