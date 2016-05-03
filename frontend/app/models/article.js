import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  author: belongsTo('author'),

  actions: {
	  print_article(article) {
	  	console.log(article.get('body'));
	  	// let modelName = this.constructor.modelName;
	  	// let adapter = this.store.adapterFor(modelName);
	  	// return adapter.printArticle(this.get('id'));
	  }
	}
});
