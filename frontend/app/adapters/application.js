import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:3000',
	headers: {
		'Accept': 'application/vnd.localhost:3000;'
	}
});