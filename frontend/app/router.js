import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('articles');

  this.route('article', function() {
    this.route('edit', { path: ':id/edit' });
    this.route('show', { path: ':id' });
    this.route('author-articles-listing', { path: ':author_id' });
  });
});

export default Router;