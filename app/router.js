import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('works', { path: 'works/:course_id'});
  this.route('broken', { path: 'broken/:course_id'});
  this.route('works-with-fewer', { path: 'works-with-fewer/:course_id'});
});

export default Router;
