# Useful ember.js, node.js and MongoDB example

This is an webapplication written in ember.js that uses node.js and MongoDB for the backend.I used the ZURB foundation for the CSS.

The user will enter his/her first and last name and date of birth and this will be commited to a database (MongoDB). The application will also provide a means to retreive the information from the database

To run the node.js server, type in the terminal. 
	
	node server.js

The node.js server is running on port 3000
MongoDB is running on it's defualt port. The application saves data in the test database, person collection.

Wishlist:
	Error checking on the input boxes (Is it actually an data of birth, etc)	
	Fix the multiplying blank records issue when ever the database gets a find request.

One thing I learned was to have a better naming convention. 

