App = Ember.Application.create(); 

App.Router.map(function() {
  //this.resouce('index', {path: '/'});
});

App.ApplicationController = Ember.Controller.extend({
	firstName: "Frank",
	lastName: "Letzes Name",

	submitForm: function() {
      // Get the text from the textfields
      var firstName = this.get('firstNameTextBox');
      var lastName = this.get('lastNameTextBox');
      var DOB = this.get('dobTextBox');
      
      if (!title.trim()) { return; } //if there is text don't do nothing

      // Create the new Todo model
      var text = this.store.createRecord('text', {
        title: title,
      });

      // Clear the "New Todo" text field
      this.set('textBox', '');

      // Save the new model
      text.save();
    },

    
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'green monster of doom'];
  }
});
