//Modified helloworld example.
//retreived from http://expressjs.com/starter/hello-world.html

//much of this code came from an github example
//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
//I have modified it to fit my needs.

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan     = require('morgan');
var loginOptions = { 
	user: 'WebApp',
	pass: '45Tests'
}


// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://ds051831.mongolab.com:51831/brnold', loginOptions); // connect to my database
//mongoose.connect('mongodb://localhost:27017/test'); // connect to my database
var Person     = require('./app/models/person');


// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /names
// ----------------------------------------------------
router.route('/people') //I know, bad grammar

	// create a person entry (accessed at POST http://localhost:8080/persons)
	.post(function(req, res) {

		var person = new Person();		// create a new instance of the person model
		person.firstName = req.body.firstName;  // set the persons name (comes from the request)
		person.lastName = req.body.lastName;
		person.dob = req.body.dob;

		person.save(function(err) {
			if (err)
				res.send(err);

		});

	})

	// get all the persons (accessed at GET http://localhost:8080/api/persons)
	.get(function(req, res) {


		Person.find(function(err, persons) {
			if (err)
				res.send(err);

      for (var i=0; i<persons.length; i++) {
        persons[i].id = persons[i]._id;
      }

      res.json({people: persons});
		});
		console.log("People were retreived!");
	});



// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);



app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })

});

app.use('/js', express.static(__dirname + '/js'));
app.use('/css',express.static(__dirname + '/css'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


