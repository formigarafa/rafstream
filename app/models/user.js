import Ember from 'ember';
import request from 'ic-ajax';

var User =  Ember.Object.extend({
  signedIn: function() {
    return !Ember.isBlank(this.get('email'));
  }.property('email'),
  logout: function() {
    var requestData = {
      url: "/api/users/sign_out.json",
      type: 'DELETE',
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
    };
    var user = this;
    return request(requestData).then(function() {
      user.setProperties({id: null, email: null});
      return user;
    });
  }
});

User.reopenClass({
  fetchSession: function() {
    var requestData = {
      url: "/api/users/current.json",
      type: 'GET',
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
    };
    return request(requestData).then(function(response) {
      return User.create(response.user);
    });
  },
  signIn: function(email, password) {
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
  },
  signUp: function(email, password, passwordConfirmation) {
    var requestData = {
      url: "/api/users.json",
      type: 'POST',
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        user: {
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation
        }
      })
    };
    return request(requestData).then(function(response) {
      return User.create(response.user);
    });
  }
});


export default User;
