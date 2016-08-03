import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),

  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isNotValid: Ember.computed.not('isValid'),
  actualEmailAddress: Ember.computed('email', function () {
    console.log('actualEmailAddress function is called: ', this.get('email'));
  }),

  emailAddressChanged: Ember.observer('email', function() {
    console.log('observer is called', this.get('email'));
  }),

});
