import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.id, { reload: true });
  },
  actions: {
    savePost() {
      let model = this.get('controller.model');
      model.save().then(() => {
        console.info('Article saved!');
        this.transitionTo('articles');
      });
    },

    print_article() {
      console.log('printing article...');
    }
  }
});