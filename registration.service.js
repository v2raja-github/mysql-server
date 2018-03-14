//import { Register } from './domain';

module.exports = function(app, connection) { 
	app.get('/registration/:studentId', function(req, res) {
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

	app.post('/registration/:studentId', function(req, res) {
		console.log('inside post registration api');

		//const regClasses = new Array<Register>();
		const regClass = req.body;
		console.log(regClass);

		//for (let regClass of regClasses) {
			let _qry = "replace into student_classes values ("
				+ req.params.studentId + " , " + regClass.class_id + "";

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
