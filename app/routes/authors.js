import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('author');
  },

  actions: {

    saveAuthor(author) {
      console.log("saving author");
      author.save();
    }
  }
});
