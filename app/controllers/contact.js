import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: Ember.computed('message', function () {
    let msg = this.get('message');
    return msg.trim().length > 5;
  }),
  isValid: Ember.computed.and('validEmail', 'validMessage'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`We have received your message: "${this.get('message').trim()}"; we will reach out to you via "${this.get('emailAddress')}"`);
      this.set('responseMessage', `We got your message and we'll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
