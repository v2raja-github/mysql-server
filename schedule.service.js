module.exports = function(app, connection) { 
	app.get('/schedule/:classId', function(req, res) {
		console.log('inside get schedule api');
		connection.query("select * from class_schedule where class_id = '" +req.params.classId+ "'", function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});

	app.get('/schedule_conflict', function(req, res) {
		console.log('inside get schedule conflicts api');
		connection.query("select x.class_id as class_id, y.class_id as conflict_class_id from class_schedule x, class_schedule y"
			+ " where x.class_id != y.class_id and x.week_day = y.week_day and"
			+ " (x.start_time between y.start_time and y.end_time"
				+	" OR x.end_time between y.start_time and y.end_time"
				+	" OR y.start_time between x.start_time and x.end_time"
				+	" OR y.end_time between x.start_time and x.end_time)", function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});
} 