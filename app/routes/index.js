import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(response => {
        const controller = this.controller;

        controller.set(
          'responseMessage',
          `Thank you! We've just saved your emailAddress: \
          ${newInvitation.get('email')} with the following id: ${response.get('id')}`
        );
        // reset the model to clear the form
        controller.set('model', this.store.createRecord('invitation'));
      });
    },
  },

  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controller.get('model').rollbackAttributes();
  },
});
