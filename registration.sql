use node;  -- node database name, change if required

DROP TABLE if exists user;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE if exists student;
CREATE TABLE `student` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `institution` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1040 DEFAULT CHARSET=utf8;

DROP TABLE if exists class;
CREATE TABLE `class` (
  `class_id` int(11) NOT NULL,
  `classname` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE if exists class_schedule;
CREATE TABLE `node`.`class_schedule` (
  `class_id` INT NOT NULL,
  `week_day` ENUM ('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT') NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  PRIMARY KEY (`class_id`, `week_day`, `start_time`, `end_time`));

DROP TABLE if exists student_classes;
CREATE TABLE `student_classes` (
  `student_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  PRIMARY KEY (`student_id`,`class_id`),
  CONSTRAINT `students_classes_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  CONSTRAINT `students_classes_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


insert into student values (10001, 'Doug',  'Nice',  'Doug1',  'male',  35,  'Columbus University', 'Robotics');
insert into student values (10002, 'Ramsy',  'Marco',  'Ramsy1',  'male',  25,  'Dublin University', 'History');
insert into student values (10003, 'Dave',  'Manning',  'Dave1',  'male',  20,  'Dayton University', 'Chemistry');

insert into class values  (101,  'Intro to Robotics',  'Robotics');
insert into class values  (102,  'Indian History',  'History');
insert into class values  (103,  'Programming II',  'Computer Science');
insert into class values  (104,  'Calculus III',  'Mathematics');
insert into class values  (105,  'English Grammer I',  'English');

insert into class_schedule values  (101,  'MON',  '11:10:00', '12:30:00');
insert into class_schedule values  (101,  'TUE',  '11:10:00', '12:30:00');

insert into class_schedule values  (102,  'WED',  '11:10:00', '12:30:00');
insert into class_schedule values  (102,  'FRI',  '11:10:00', '12:30:00');

insert into class_schedule values  (103,  'TUE',  '09:10:00', '11:00:00');
insert into class_schedule values  (103,  'THU',  '14:10:00', '16:00:00');

insert into class_schedule values  (104,  'TUE',  '14:10:00', '16:00:00');
insert into class_schedule values  (104,  'THU',  '14:10:00', '16:00:00');
insert into class_schedule values  (104,  'FRI',  '14:10:00', '16:00:00');

insert into class_schedule values  (105,  'MON',  '09:10:00', '11:00:00');
insert into class_schedule values  (105,  'WED',  '09:10:00', '11:00:00');
insert into class_schedule values  (105,  'FRI',  '09:10:00', '11:00:00');


INSERT INTO user (`user_id`, `password`) VALUES ('10001', 'abcd1');
INSERT INTO user (`user_id`, `password`) VALUES ('10002', 'abcd2');
INSERT INTO user (`user_id`, `password`) VALUES ('99999', 'admin');

-- insert into student_classes values ('10001', '103');

-- replace into student_classes values ('10001', '103');

-- verify student schedule conflict for class xxx

-- get class schedule for xxx

-- get student registered classes, if class is already registered, send info calss already registered for student xxx

	-- class conflict matrix
--	select x.class_id, y.class_id from class_schedule x, class_schedule y
--	where x.class_id != y.class_id and x.week_day = y.week_day and
--		(x.start_time between y.start_time and y.end_time
--			OR x.end_time between y.start_time and y.end_time
--			OR y.start_time between x.start_time and x.end_time
--			OR y.end_time between x.start_time and x.end_time)
--		and x.class_id = 104 and y.class_id = 103;





