import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    sendMessage(newContact) {
      const controller = this.controller;
      const model = controller.get('model');

      newContact.save().then(() => {
        alert(`We have received your message: "${newContact.get('message').trim()}"; \
               we will reach out to you via "${newContact.get('emailAddress')}"`
        );
        controller.set('responseMessage', `We got your message and we'll get in touch soon`);
        model.set('emailAddress', '');
        model.set('message', '');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
