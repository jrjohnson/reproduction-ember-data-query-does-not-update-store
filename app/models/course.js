import DS from 'ember-data';

export default DS.Model.extend({
  objectives: DS.hasMany('objective', {async: true}),
});
