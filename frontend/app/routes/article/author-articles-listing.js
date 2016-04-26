import Ember from 'ember';

export default Ember.Route.extend({
	 model(params) {
    return this.store.findAll('article', params.author_id, { reload: true });
  }
});
