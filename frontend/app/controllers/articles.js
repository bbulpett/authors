import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['search'],
	search: null,

	// filteredArticles: Ember.computed('search', 'model', function() {
	// 	var search = this.get('search');
	// 	var articles = this.get('model');

	// 	if (search) {
	// 		return articles.filterBy('search', search);
	// 	} else {
	// 		return articles;
	// 	}
	// })
});
