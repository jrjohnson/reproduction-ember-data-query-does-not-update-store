import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://ilios3-demo.ucsf.edu',
  namespace: 'api/v1',
  headers: {
    'X-JWT-AUTHORIZATION': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpbGlvcyIsImF1ZCI6ImlsaW9zIiwiaWF0IjoiMTUwMzA5MzA4MiIsImV4cCI6IjE1MDY4NDExOTkiLCJ1c2VyX2lkIjoxMDAwfQ.qh78dnKPPv7oKrI3kxmcl7PuLANPPQXW6WWGy7YOfLE',
  }
});
