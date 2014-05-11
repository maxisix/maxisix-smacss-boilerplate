// Configure RequireJS
requirejs.config({
	baseUrl: "assets/js",
	paths: {
		// The libraries we use
		jquery: [
			'//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
			//If the CDN location fails, load from this location
			'lib/jquery-1.11.0.min'
		]
	}
});


//Load header script
require(['header'], function() {

});