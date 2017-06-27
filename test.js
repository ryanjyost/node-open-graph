var og = require('./');



og("http://github.com/ryanjyost/node-open-graph/raw/master/test.html", function(err, meta) {
	if (err) return console.log(err);

	console.log(meta);
})