import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    saveBook(book) {
      console.log('saving book');
      book.save();
    },
  }
});
