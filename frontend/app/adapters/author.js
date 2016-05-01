import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend ({
	headers: {
		'Accept': 'application/vnd.localhost:3000;'
	}
});