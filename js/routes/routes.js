angular.module('napp', ['ngRoute', 'ui.materialize']).config(function($routeProvider){
		$routeProvider.when('/',{
			template: "<h3 class='white-text' style='padding-top:100px;'>Welcome to data natives</h3>"
		}).when('/schedule',{
			templateUrl: "temp/schedule.html"
		}).when('/speakers',{
			templateUrl: "temp/speakers.html"
		}).when('/venue',{
			templateUrl: "temp/venue.html"
		}).when('/favourites',{
			templateUrl: "temp/fav.html"
		});
	});