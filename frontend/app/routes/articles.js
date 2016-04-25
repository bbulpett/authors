import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('article');
	},

  queryParams: {
  	search: {
  		refreshModel: true
  	}
  },

  // model(params) {
  // 	return this.store.query('articles', params);
  // }
});
