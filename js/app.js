App = Ember.Application.create();

App.Router.map(function() {
  this.resource('ViewData');
  this.resource('Form');
});

App.ApplicationController = Ember.Controller.extend({

});

App.VIewDataRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('api/persons', null);
  }



  // model: function() {
  //   var http = new XMLHttpRequest();
  //   var url = "api/persons";

  //   http.onload = reqListener;;

  //   http.open("GET", url, true);
  //   http.send(null);
  
  // }
  // reqListener: function () {
  //   console.log(this.responseText);
  // }

});


App.ViewDataController = Ember.Controller.extend({
    
//   actions: {
//       getData: function(){ 
//       var http = new XMLHttpRequest();
//       var url = "api/persons";

//       http.onload = reqListener;;

//       http.open("GET", url, true);
//       http.send(null);
//     }
  
// function reqListener () {
//     console.log(this.responseText);
//   }

//   }

  

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


      var params = "firstName=" + firstName + "&lastName=" + lastName + "&dob=" + DOB;

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