import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('article');
	},

  actions: {
    print_article() {
      console.log('printing article...');
    }

    // print_article: function() {
    //   var _this = this;
    //   var article = this.get('content');
    //   var adapter = this.container.lookup('adapter:article');

    //   adapter.ajax(this.printArticleUrl(adapter), 'GET')
    //     .then(function(response) {
    //       article.print_article(resopnse.article);
    //       _this.transitionToRoute('tasks');
    //     }, this.completeFailure);
    // },

    // articleCompleteFailure: function(response) {
    //   console.log("Article failed to print.");
    // },

    // printArticleUrl: function(adapter) {
    //   return adapter.buildURL('article', this.content.get('id')) + '/print_article'
    // }
  }
});
