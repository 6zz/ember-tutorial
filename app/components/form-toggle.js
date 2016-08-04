import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(item) {
      item.set('isEditing', true);
    },

    cancelEdit(item) {
      item.set('isEditing', false);
      item.rollbackAttributes();
    },

    save(item) {
      if (!item.get('isValid')) {
        return;
      }

      console.log("saving...", item);
      item.set('isEditing', false);
      this.sendAction('action', item);
    }
  }
});
