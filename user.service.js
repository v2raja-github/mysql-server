module.exports = function(app, connection) { 
	app.get('/user/:userId', function(req, res) {
		console.log('inside get users api');
		connection.query("select * from user where user_id = '" +req.params.userId+ "'", function(err, result) {
			if(err) {
				//throw err;
				res.json(err);
			}
			res.json(result);
		});
	});
} 