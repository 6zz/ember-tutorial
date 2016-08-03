import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  emailAddress: DS.attr('string'),
  message: DS.attr('string'),
  // validations
  validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: Ember.computed('message', function () {
    const msg = this.get('message');
    return (msg && msg.trim().length > 5);
  }),
  isValid: Ember.computed.and('validEmail', 'validMessage'),
  isNotValid: Ember.computed.not('isValid'),
});
