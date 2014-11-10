import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('stream', function() {
    this.resource('posts', function(){
      this.route('new');
    });
    this.resource('post', { path: '/post/:post_id'}, function() {
      this.route('edit');
      this.route('delete');
    });
  });
  this.route('sign_up');
  this.route('sign_in');
});

export default Router;
