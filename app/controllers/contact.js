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
});
