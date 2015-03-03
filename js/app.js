App = Ember.Application.create();

App.Router.map(function() {
  //this.resouce('index', {path: '/'});
});

App.IndexController = Ember.Controller.extend({
  firstName: "Frank",
  lastName: "Letzes Name",

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

      


      // Clear the "New Todo" text field
      this.set('textBox', '');

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
  },


});