import Ember from 'ember';
import request from 'ic-ajax';

var User =  Ember.Object.extend({

});

User.reopenClass({
  createSession: function(email, password) {
    var requestData = {
      url: "/api/users/sign_in.json",
      type: 'POST',
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    };
    return request(requestData).then(function(response) {
      return User.create(response.user);
    });
  }
});


export default User;
