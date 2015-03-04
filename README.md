# Useful ember.js, node.js and MongoDB example

This is an webapplication written in ember.js that uses node.js and MongoDB for the backend. 

The user will enter his/her first and last name and date of birth and this will be commited to a database (MongoDB). The application will also provide a means to retreive the information from the database

At this current iteration, the user enters data in the 3 input boxes and the button send the data to the database.

To run, type in the terminal. 
	
	node server.js

The node.js server is running on port 3000
MongoDB is running on it's defualt port.

TODO:
	Error checking on the input boxes (Is it actually an data of birth, etc)
		I will need to connect 
	Make the HTTP page pretty
	Get info back from the datbase - thats going to be fun. :)
	Install everything on my Raspberry pi and host to the web!
