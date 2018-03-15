//import { Register } from './domain';

module.exports = function(app, connection) { 
	app.get('/enrolled/:studentId', function(req, res) {
		console.log('inside get registration api');

		let _qry = "select c.class_id, c.classname, c.department "
			+ "from student_classes reg "
			+ "left outer join class c on reg.class_id = c.class_id "
			+ "left outer join student s on reg.student_id = s.student_id "
			+ "where reg.student_id = "
			+ req.params.studentId
		connection.query(_qry, function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});

	app.get('/courses', function(req, res) {
		console.log('inside get courses api');

		let _qry = "select class_id, classname, department from class"
		connection.query(_qry, function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});

	app.get('/students', function(req, res) {
		console.log('inside get students api');

		let _qry = "select student_id, firstname, lastname, username, "
			+ " gender, age, institution, degree from student"
		connection.query(_qry, function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});

	app.get('/student/:studentId', function(req, res) {
		console.log('inside get student api');

		let _qry = "select student_id, firstname, lastname, username, "
			+ " gender, age, institution, degree from student"
			+ " where student_id = "
			+ req.params.studentId
		connection.query(_qry, function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});

	app.post('/register/:studentId', function(req, res) {
		console.log('inside post registration api');

		//const regClasses = new Array<Register>();
		const regClass = req.body;
		console.log(regClass);

		//for (let regClass of regClasses) {
			let _qry = "replace into student_classes values ("
				+ regClass.student_id + " , " + regClass.class_id + ")";

			connection.query(_qry, function(err, result) {
				if(err) {
					//throw err;
					res.json(err);
				}
				res.json(result);
			});
		//}
	});
}
