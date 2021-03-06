
App = Ember.Application.create();


App.Router.map(function() {
  this.resource('DieDaten'); //German for 'The Data', I was having issues with this route and I renamed it to somthing very unique to solve the issue.
  this.resource('Form');
  this.resource('Confirm');
  this.resource('Person');
});

App.IndexRoute = Ember.Route.extend({ //This autoredirects to the form input page
  beforeModel: function() {
    this.transitionTo('Form');
  }
});


App.ApplicationStore = DS.Store.extend(); //Could be a leftover from ember data, not sure.

App.Person = DS.Model.extend({  //this is my data model
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    dob: DS.attr('string'),

    //ember docs for this logic.
    fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});


App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: '//localhost:3000',
  namespace: 'api'
});


App.ApplicationController = Ember.Controller.extend({

});

App.MyArrayController = Ember.ArrayController.extend({
  model: function() {
      $.getJSON('api/people', function(data) {

       App.MyArrayController.set('model', data);
        });
    }


});

//It's German for "The Data Route" When all else fails, name the problem varible/template name in German.
App.DieDatenRoute = Ember.Route.extend({

  model: function () {
    return this.store.find('person');
  }

});

App.DieDatenController = Ember.Controller.extend({

  actions: {
    click: function() {

      //this.refresh();
      var self = this;  //THANK YOU STACKOVERFLOW!
      this.store.find('person').then(function(data){
        self.set('model', data);
      });
    }
  }


});

App.ConfirmRoute = Ember.Controller.extend({

});

App.FormController = Ember.Controller.extend({


  actions: {
    submitForm: function() {
      //code for making a http POST request obtained from
      //http://stackoverflow.com/questions/9713058/sending-post-data-with-a-xmlhttprequest
      var http = new XMLHttpRequest();
      var url = "api/people";
      http.open("POST", url, true);

      // Get the text from the textfields
      var firstName = this.get('firstNameTextBox');
      var lastName = this.get('lastNameTextBox');
      var DOB = this.get('dobTextBox');




      // Clear the text fields
      this.set('firstNameTextBox', '');
      this.set('lastNameTextBox', '');
      this.set('dobTextBox', '');


      var params = "firstName=" + firstName + "&lastName=" + lastName + "&dob=" + DOB ;

      console.log("I am sending: " + params);

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
      //this.transistionToRoute('Confirm', null);
    }
  }
});

