import Ember from 'ember';

export default  Ember.Route.extend({
  store: Ember.inject.service(),
  /**
   * Prefetch related data to limit network requests
  */
  afterModel(model) {
    return this.get('store').query('objective', {filters: {courses: [model.get('id')]}});
  }
});
