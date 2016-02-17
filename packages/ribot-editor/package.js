Package.describe({
	name: 'dcsan:riboteditor',
	version: '0.0.1',
	summary: 'Ribot Editor',
	git: ''
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'coffeescript',
		'underscore',
		'rocketchat:lib',
		'nimble:restivus'
	]);

	// api.addFiles('server/api.coffee', 'server');
	// api.addFiles('server/routes.coffee', 'server');
});

Package.onTest(function(api) {

});
