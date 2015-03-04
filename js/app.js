App = Ember.Application.create();

App.Router.map(function() {
  this.resource('ViewData');
  this.resource('Form');
});

App.ApplicationController = Ember.Controller.extend({

});

App.ViewDataRoute = Ember.Route.extend({
  model: function() {
   // return this.store.find('api/persons', null);
    return posts;
  }


});


App.ViewDataController = Ember.Controller.extend({
    
title: 'hearder asdfasd'
  

});



App.FormController = Ember.Controller.extend({


  actions: {
    submitForm: function() {
      //code for making a http POST request obtained from 
      //http://stackoverflow.com/questions/9713058/sending-post-data-with-a-xmlhttprequest
      var http = new XMLHttpRequest();
      var url = "api/persons";
      http.open("POST", url, true);

      // Get the text from the textfields
      var firstName = this.get('firstNameTextBox');
      var lastName = this.get('lastNameTextBox');
      var DOB = this.get('dobTextBox');

      


      // Clear the text fields
      this.set('firstNameTextBox', '');
      this.set('lastNameTextBox', '');
      this.set('dobTextBox', '');


      var params = "firstName=" + firstName + "&lastName=" + lastName + "&dOB=" + DOB;

      console.log("I am sending" & params);

      //Send the proper header information along with the request
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     // http.setRequestHeader("Content-length", params.length);
     // http.setRequestHeader("Connection", "close");

      http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
        }
      }

      http.send(params);

    }
  }


});


var posts = [{
  id: '1',
  title: "Rails is Omakase",
  author: { name: "d2h" },
  date: new Date('12-27-2012'),
  excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
  body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
}, {
  id: '2',
  title: "The Parley Letter",
  author: { name: "d2h" },
  date: new Date('12-24-2012'),
  excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
  body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."  
}];