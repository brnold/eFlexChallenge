This is an webapplication written in ember.js. 

The user will enter his/her first and last name and date of birth and this will be commited to a database (MongoDB). The application will also provide a means to retreive the information from the database

At this current iteration, I have MongoDB set up to the point of having 3 input boxes and a button. 

I am currently working on creating a webserver using node.js and express. Once that is running I will interface with MongoDB.

Current holes in my knowldge are

1. How to I transfer data between the node.js framework and the webserver?
	I think I do this with sockets. Not entirely sure yet.

To run, type node server.js
The server is running on port 3000

TODO:
	Error checking on the input boxes (Is it actually an data of birth, etc)
	Get a socket server running betweent the front end and the express server
	Get the backend server connecting to the database

	Get info back from the datbase - thats going to be fun. :)
